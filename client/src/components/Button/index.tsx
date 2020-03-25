import React from 'react';

interface CommonButtonInterface {
    outlined?: boolean;
    size?: 'lg' | 'sm';
    type?: 'button' | 'reset' | 'submit';
}

interface SpecificButtonInterface extends CommonButtonInterface {
    color: string;
}

interface ButtonInterface extends SpecificButtonInterface {
    pilled?: boolean;
    squared?: boolean;
}

const CommonButton: React.FC<ButtonInterface> = ({
                                                     children,
                                                     color,
                                                     outlined,
                                                     pilled,
                                                     size,
                                                     squared,
                                                     type
                                                 }) => (
    <button
        type={type}
        className={`btn ${size && `btn-${size}`} ${squared ? 'btn-squared' : pilled && 'btn-pill'} btn-${(outlined && 'outline-') || ''}${color}`}
    >
        {children}
    </button>
);
const PilledButton: React.FC<SpecificButtonInterface> = props => (
    <CommonButton pilled {...props}/>
);
const SquaredButton: React.FC<SpecificButtonInterface> = props => (
    <CommonButton squared {...props}/>
);

export const RedPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='danger' {...props}/>;
export const YellowPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='warning' {...props}/>;
export const GreenPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='success' {...props}/>;
export const BluePilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='info' {...props}/>;
export const PrimaryPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='primary' {...props}/>;
export const SecondaryPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton
    color='secondary' {...props}/>;
export const LightPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='light' {...props}/>;
export const DarkPilledButton: React.FC<CommonButtonInterface> = props => <PilledButton color='dark' {...props}/>;

export const RedSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton color='danger' {...props}/>;
export const YellowSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton
    color='warning' {...props}/>;
export const GreenSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton color='success' {...props}/>;
export const BlueSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton color='info' {...props}/>;
export const PrimarySquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton
    color='primary' {...props}/>;
export const SecondarySquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton
    color='secondary' {...props}/>;
export const LightSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton color='light' {...props}/>;
export const DarkSquaredButton: React.FC<CommonButtonInterface> = props => <SquaredButton color='dark' {...props}/>;

export const RedButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'danger', ...props}}/>;
export const YellowButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'warning', ...props}}/>;
export const GreenButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'success', ...props}}/>;
export const BlueButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'info', ...props}}/>;
export const PrimaryButton: React.FC<CommonButtonInterface> = props =>
    <CommonButton {...{color: 'primary', ...props}}/>;
export const SecondaryButton: React.FC<CommonButtonInterface> = props =>
    <CommonButton {...{color: 'secondary', ...props}}/>;
export const LightButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'light', ...props}}/>;
export const DarkButton: React.FC<CommonButtonInterface> = props => <CommonButton {...{color: 'dark', ...props}}/>;
