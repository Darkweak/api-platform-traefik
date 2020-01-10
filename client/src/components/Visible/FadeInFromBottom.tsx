import React, { useRef } from 'react';
import { useVisible } from '../../hooks';
import { IClassNames } from '../Layout';

interface IFadeInFromBottom {
    delay?: number
}

export const FadeInFromBottom: React.FC<IFadeInFromBottom & IClassNames> = ({ children, classnames, delay }) => {
    const ref: any = useRef();
    const isVisible = useVisible(ref, -50);

    return (
        <div ref={ref} className={`translate-top w-100 ${ classnames || '' } ${ isVisible ? 'fade-in-from-bottom' : 'hidden' } ${ delay && `anim-delay--${ 5 * delay }` }`}>
            { children }
        </div>
    )
};
