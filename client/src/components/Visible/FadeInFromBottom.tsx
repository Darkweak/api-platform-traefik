import React, { createRef } from 'react';
import { useVisible } from '../../hooks';
import { ClassNameInterface } from '../Layout';
import './fade.scss';

interface IFadeInFromBottom {
    delay?: number
}

export const FadeInFromBottom: React.FC<IFadeInFromBottom & ClassNameInterface> = ({children, className, delay}) => {
    const ref: any = createRef();
    const isVisible = useVisible(ref, -50);

    return (
        <div ref={ref}
             className={`translate-top w-100 ${className || ''} ${isVisible ? 'fade-in-from-bottom' : 'hidden'} ${delay && `anim-delay--${5 * delay}`}`}>
            {children}
        </div>
    )
};
