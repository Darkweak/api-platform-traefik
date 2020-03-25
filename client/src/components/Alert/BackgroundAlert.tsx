import * as React from 'react';

interface IBackgroundAlert {
    color: string,
}

const BackgroundAlert: React.FC<IBackgroundAlert> = ({children, color}) => (
    <div role='alert' className={`alert alert-${color}`}>
        {children}
    </div>
);

export const BackgroundAlertDanger: React.FC = ({children}) => (
    <BackgroundAlert color='danger'>
        {children}
    </BackgroundAlert>
);

export const BackgroundAlertInfo: React.FC = ({children}) => (
    <BackgroundAlert color='info'>
        {children}
    </BackgroundAlert>
);

export const BackgroundAlertSuccess: React.FC = ({children}) => (
    <BackgroundAlert color='success'>
        {children}
    </BackgroundAlert>
);

export const BackgroundAlertWarning: React.FC = ({children}) => (
    <BackgroundAlert color='warning'>
        {children}
    </BackgroundAlert>
);
