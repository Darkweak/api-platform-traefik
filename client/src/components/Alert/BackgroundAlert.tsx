import * as React from 'react';
import { IClassName } from '../Layout';

interface IBackgroundAlert extends IClassName{
    color: string,
}

const BackgroundAlert: React.FC<IBackgroundAlert> = ({ children, className, color }) => (
    <div className={`rounded-0 m-0 text-light text-center card bg-${ color } ${ className || '' }`}>
        { children }
    </div>
);

export const BackgroundAlertDanger: React.FC<IClassName> = ({ ...rest }) => (
    <BackgroundAlert {...{ ...rest, color: 'danger' }}/>
);

export const BackgroundAlertInfo: React.FC<IClassName> = ({ ...rest }) => (
    <BackgroundAlert {...{ ...rest, color: 'info' }}/>
);

export const BackgroundAlertSuccess: React.FC<IClassName> = ({ ...rest }) => (
    <BackgroundAlert {...{ ...rest, color: 'success' }}/>
);

export const BackgroundAlertWarning: React.FC<IClassName> = ({ ...rest }) => (
    <BackgroundAlert {...{ ...rest, color: 'warning' }}/>
);
