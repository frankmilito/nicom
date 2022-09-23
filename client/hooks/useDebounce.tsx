import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
    //implements debounce so as to avoid making api request on every key stroke

    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debouncedValue
}