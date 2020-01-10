import React, { useContext, useRef } from 'react';
import { IField } from './Field';
import { Link } from 'react-router-dom';
import { FormContext } from '../../contexts';
import { Spinner } from '../Loader';

export interface ILink {
    label: string,
    path: string,
}

export interface IForm {
    additionalLinks?: ILink[],
    buttonText?: string,
    fields: IField[],
    submitForm?: (e: any, ref: any) => any,
}

const formatformToJson = (elements: any): string => {
    let formData = new FormData(elements);
    return JSON.stringify(Object.fromEntries(formData));
};

export const Form: React.FC<IForm> = ({ additionalLinks, buttonText, fields, submitForm = async () => {} }) => {
    const { isLoading, dispatch } = useContext(FormContext);
    const ref: any = useRef(null);
    return (
        <form
            onSubmit={(event: any) => {
                event.preventDefault();
                dispatch({ type: 'SET_LOADING', payload: true });
                submitForm(formatformToJson(event.target), ref)
                    .then(() => {
                        dispatch({ type: 'SET_LOADING', payload: false });
                    });
            }}
            {...{ className: 'row', ref }}>
            {
                fields.map((field: IField, index: number) => (
                    <div className={`tile m-0 ${field.classnames || 'g--12' }`} key={index}>
                        {
                            field.label ?
                                <label htmlFor={ field.name }>{ field.label }</label> : ''
                        }
                        {
                            'textarea' === field.type ?
                                <textarea {...{ name: field.name, required: true, disabled: isLoading, rows: 3, placeholder: 'Une question, un mot doux ?', className: 'w-100' }}></textarea> :
                                <input {...{ name: field.name, type: field.type || 'text', required: true, disabled: isLoading, placeholder: field.placeholder, className: 'w-100' }}/>
                        }
                    </div>
                ))
            }
            <div className="text-center w-100">
                <button className="btn--raised btn--lg btn--green" disabled={ isLoading }>{ isLoading ? <Spinner/> : buttonText || 'Valider' }</button>
            </div>
            {
                additionalLinks ?
                    <div className="text-center w-100 pt-1">
                        {
                            additionalLinks.map((additionalLink: ILink, index: number) =>
                                <Link key={ index } to={ additionalLink.path }>{ additionalLink.label }</Link>
                            )
                        }
                    </div> : ''
            }
        </form>
    )
};
