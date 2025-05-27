import { useState, useEffect } from 'react';
import axios from 'axios';

export function useTransactions({
                                    userId,
                                    categoryIds = [],
                                    accountIds = [],
                                    startDate = null,
                                    endDate = null,
                                    keyword = '',
                                    sortBy = 'dateAndTime',
                                    direction = true,
                                    page = 0,
                                    size = 10,
                                }) {

    const [transactions, setTransactions] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setTransactions([]);
            return;
        }

        setLoading(true);
        setError(null);

        const params = {
            userId,
            page,
            size,
            sortBy,
            direction,
        };

        if (categoryIds.length > 0) params.categoryIds = categoryIds;
        if (accountIds.length > 0) params.accountIds = accountIds;
        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
        if (keyword) params.keyword = keyword;

        axios
            .get(`http://localhost:8080/api/transactions/all`, { params })
            .then((response) => {
                const data = response.data;
                setTransactions(data.content);
                setTotalPages(data.totalPages);
                setTotalElements(data.totalElements);
                console.log("success fetching transactions: ", response);
            })
            .catch((error) => {
                setError(error);
                console.log("error fetching transactions: ", error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId, categoryIds, accountIds, startDate, endDate, keyword, sortBy, direction, page, size]);

    return { transactions, totalPages, totalElements, loading, error };
}
