import * as React from 'react';
import { IChildren } from '../Layout';

interface IBackgroundAlert {
    color: string,
}

const BackgroundAlert = ({ color, children }: IBackgroundAlert & IChildren) => (
    <div className={`color--paper text-center card bg--${ color }`}>
        { children }
    </div>
);

export const BackgroundAlertDanger = ({ children }: IChildren) => (
    <BackgroundAlert color="red">
        { children }
    </BackgroundAlert>
);

export const BackgroundAlertInfo = ({ children }: IChildren) => (
    <BackgroundAlert color="blue">
        { children }
    </BackgroundAlert>
);

export const BackgroundAlertSuccess = ({ children }: IChildren) => (
    <BackgroundAlert color="green">
        { children }
    </BackgroundAlert>
);

export const BackgroundAlertWarning = ({ children }: IChildren) => (
    <BackgroundAlert color="orange">
        { children }
    </BackgroundAlert>
);
