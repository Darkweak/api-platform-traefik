import { useContext, useEffect } from 'react';
import { RouterContext } from '../contexts';

export const useRedirection = (condition: boolean, pathname: string = '/') => {
    const { router } = useContext(RouterContext);
    useEffect(() => {
        if (condition && router) {
            router.history.push(pathname)
        }
    }, [condition, pathname, router]);
};
