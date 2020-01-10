import React from 'react';

interface ISpecificButton {
    color: string;
}

interface IButton extends ISpecificButton {
    type: 'flat'|'float'|'raised'
}

const CommonButton: React.FC<IButton> = ({ children, color, type }) => (
    <button className={`btn--${type} btn--${color} m-0 ml-1 py-1 px-2 d-flex`}>
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

export const RedFlatButton: React.FC = props => <FlatButton {...{ color: 'red', ...props }}/>;
export const YellowFlatButton: React.FC = props => <FlatButton {...{ color: 'yellow', ...props }}/>;
export const GreenFlatButton: React.FC = props => <FlatButton {...{ color: 'green', ...props }}/>;
export const BlueFlatButton: React.FC = props => <FlatButton {...{ color: 'blue', ...props }}/>;
export const PrimaryFlatButton: React.FC = props => <FlatButton {...{ color: 'primary', ...props }}/>;
export const SecondaryFlatButton: React.FC = props => <FlatButton {...{ color: 'secondary', ...props }}/>;
export const AccentFlatButton: React.FC = props => <FlatButton {...{ color: 'accent', ...props }}/>;

export const RedFloatButton: React.FC = props => <FloatButton {...{ color: 'red', ...props }}/>;
export const YellowFloatButton: React.FC = props => <FloatButton {...{ color: 'yellow', ...props }}/>;
export const GreenFloatButton: React.FC = props => <FloatButton {...{ color: 'green', ...props }}/>;
export const BlueFloatButton: React.FC = props => <FloatButton {...{ color: 'blue', ...props }}/>;
export const PrimaryFloatButton: React.FC = props => <FloatButton {...{ color: 'primary', ...props }}/>;
export const SecondaryFloatButton: React.FC = props => <FloatButton {...{ color: 'secondary', ...props }}/>;
export const AccentFloatButton: React.FC = props => <FloatButton {...{ color: 'accent', ...props }}/>;

export const RedButton: React.FC = props => <Button {...{ color: 'red', ...props }}/>;
export const YellowButton: React.FC = props => <Button {...{ color: 'yellow', ...props }}/>;
export const GreenButton: React.FC = props => <Button {...{ color: 'green', ...props }}/>;
export const BlueButton: React.FC = props => <Button {...{ color: 'blue', ...props }}/>;
export const PrimaryButton: React.FC = props => <Button {...{ color: 'primary', ...props }}/>;
export const SecondaryButton: React.FC = props => <Button {...{ color: 'secondary', ...props }}/>;
export const AccentButton: React.FC = props => <Button {...{ color: 'accent', ...props }}/>;
