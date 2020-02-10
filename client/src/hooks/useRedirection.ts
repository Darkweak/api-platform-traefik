import { useEffect } from 'react';
import { useHistory } from 'react-router';

export const useRedirection = (condition: boolean, pathname: string = '/') => {
    const { push } = useHistory();
    useEffect(() => {
        if (condition) {
            push(pathname)
        }
    }, [condition, pathname, push]);
};
