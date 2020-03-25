import React, { createRef, useContext } from 'react';
import { IField } from './Field';
import { Link } from 'react-router-dom';
import { FormContext, LanguageContext } from '../../contexts';
import { Spinner } from '../Loader';
import { GreenPilledButton } from '../Button';
import { Icon } from '../Layout';

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

export const Form: React.FC<IForm> = ({
                                          additionalLinks, buttonText, fields, submitForm = async () => {
    }
                                      }) => {
    const {isLoading, dispatch} = useContext(FormContext);
    const {translate} = useContext(LanguageContext);
    const t = (value: string) => translate(`form.field.${value}`);
    const ref: any = createRef<HTMLFormElement>();
    return (
        <form
            onSubmit={(event: any) => {
                event.preventDefault();
                dispatch({type: 'SET_LOADING', payload: true});
                submitForm(formatformToJson(event.target), ref)
                    .then(() => {
                        dispatch({type: 'SET_LOADING', payload: false});
                    });
            }}
            className='row'
            ref={ref}
        >
            {
                fields.map((field: IField, index: number) => (
                    <div className={`m-0 py-2 form-group ${field.className || 'col-12'}`} key={index}>
                        {
                            field.label ?
                                <label htmlFor={field.name}>{t(`${field.name}.label`)}</label> : ''
                        }
                        {
                            'textarea' === field.type ?
                                <textarea {...{
                                    className: 'w-100 form-control form-control-lg',
                                    disabled: isLoading,
                                    name: field.name,
                                    placeholder: t(`${field.name}.placeholder`),
                                    required: true,
                                    rows: 3,
                                }}/> :
                                <input {...{
                                    className: 'form-control form-control-lg',
                                    disabled: isLoading,
                                    name: field.name,
                                    placeholder: t(`${field.name}.placeholder`),
                                    required: true,
                                    type: field.type || 'text',
                                }}/>
                        }
                    </div>
                ))
            }
            <div className='text-center w-100'>
                <GreenPilledButton type='submit'>{
                    isLoading ?
                        <Spinner/> :
                        <><Icon icon='paper-plane'/> {translate(`form.button.${buttonText || 'validate'}`)}</>
                }</GreenPilledButton>
            </div>
            {
                additionalLinks ?
                    <div className='text-center w-100 pt-1'>
                        {
                            additionalLinks.map((additionalLink: ILink, index: number) =>
                                <Link key={index}
                                      to={additionalLink.path}>{translate(`form.additionalLink.${additionalLink.label}`)}</Link>
                            )
                        }
                    </div> : ''
            }
        </form>
    )
};
