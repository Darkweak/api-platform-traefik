import React, { useRef } from 'react';
import { useDisplayOnce } from '../../hooks';
import { IClassName } from '../Layout';
import './visible.scss';

interface IFadeInFromBottom {
    delay?: number
}

export const FadeInFromBottom: React.FC<IFadeInFromBottom & IClassName> = ({ children, className, delay }) => {
    const ref: any = useRef();
    const show = useDisplayOnce(ref);

    return (
        <div ref={ref} className={`w-100 ${ className || '' } ${ show ? 'fade-in-from-bottom' : 'hidden' } ${ delay && `anim-delay--${ 5 * delay }` }`}>
            { children }
        </div>
    )
};
