import React from 'react';

interface ISpecificButton {
    color: string;
}

interface IButton extends ISpecificButton {
    type: 'flat'|'float'|'raised'
}

const CommonButton: React.FC<IButton> = ({ children, color, type }) => (
    <button className={`${type} btn-${color} m-0`}>
        { children }
    </button>
);
const FlatButton: React.FC<ISpecificButton> = props => (
    <CommonButton {...{type: 'flat', ...props}}/>
);
const FloatButton: React.FC<ISpecificButton> = props => (
    <CommonButton {...{type: 'float', ...props}}/>
);
const Button: React.FC<ISpecificButton> = props => (
    <CommonButton {...{type: 'raised', ...props}}/>
);

export const RedFlatButton: React.FC = props => <FlatButton {...{ color: 'danger', ...props }}/>;
export const YellowFlatButton: React.FC = props => <FlatButton {...{ color: 'warning', ...props }}/>;
export const GreenFlatButton: React.FC = props => <FlatButton {...{ color: 'success', ...props }}/>;
export const BlueFlatButton: React.FC = props => <FlatButton {...{ color: 'info', ...props }}/>;
export const PrimaryFlatButton: React.FC = props => <FlatButton {...{ color: 'primary', ...props }}/>;
export const SecondaryFlatButton: React.FC = props => <FlatButton {...{ color: 'dark', ...props }}/>;
export const AccentFlatButton: React.FC = props => <FlatButton {...{ color: 'link', ...props }}/>;

export const RedFloatButton: React.FC = props => <FloatButton {...{ color: 'danger', ...props }}/>;
export const YellowFloatButton: React.FC = props => <FloatButton {...{ color: 'warning', ...props }}/>;
export const GreenFloatButton: React.FC = props => <FloatButton {...{ color: 'success', ...props }}/>;
export const BlueFloatButton: React.FC = props => <FloatButton {...{ color: 'info', ...props }}/>;
export const PrimaryFloatButton: React.FC = props => <FloatButton {...{ color: 'primary', ...props }}/>;
export const SecondaryFloatButton: React.FC = props => <FloatButton {...{ color: 'dark', ...props }}/>;
export const AccentFloatButton: React.FC = props => <FloatButton {...{ color: 'link', ...props }}/>;

export const RedButton: React.FC = props => <Button {...{ color: 'danger', ...props }}/>;
export const YellowButton: React.FC = props => <Button {...{ color: 'warning', ...props }}/>;
export const GreenButton: React.FC = props => <Button {...{ color: 'success', ...props }}/>;
export const BlueButton: React.FC = props => <Button {...{ color: 'info', ...props }}/>;
export const PrimaryButton: React.FC = props => <Button {...{ color: 'primary', ...props }}/>;
export const SecondaryButton: React.FC = props => <Button {...{ color: 'dark', ...props }}/>;
export const AccentButton: React.FC = props => <Button {...{ color: 'link', ...props }}/>;
