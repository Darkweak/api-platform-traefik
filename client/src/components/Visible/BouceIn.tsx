import React, { useRef } from 'react';
import { useDisplayOnce } from '../../hooks';
import { IClassName } from '../Layout';


export const BounceIn: React.FC<IClassName> = ({ children, className }) => {
    const ref: any = useRef();
    const show = useDisplayOnce(ref);

    return (
        <div ref={ref} className={`${ className || '' } ${ show ? 'animated bounceIn' : 'hidden' }`}>
            { children }
        </div>
    )
};
