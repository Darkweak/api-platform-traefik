import { useEffect, useState } from 'react';
import { useVisible } from './index';

export const useDisplayOnce = (ref: any): boolean => {
    const isVisible = useVisible(ref, -100);
    const [ show, setShow ] = useState<boolean>(isVisible);
    useEffect(() => {
        if (isVisible) {
            setShow(true)
        }
    }, [isVisible]);

    return show;
};
