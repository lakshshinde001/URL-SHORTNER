import React, { useState } from "react"

const useFetch = (cd, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await cd(options, ...args);
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    };
    return {data, error, loading, fn}
}

export default useFetch;