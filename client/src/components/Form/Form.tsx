import React, { useContext, useRef, useState } from 'react';
import { DropdownFieldType, IDropdownField, IField } from './Field';
import { Link } from 'react-router-dom';
import { FormContext } from '../../contexts';
import { Spinner } from '../Loader';
import { useOutsideClick } from '../../hooks';
import './form.scss';

export interface ILink {
    label: string,
    path: string,
}

export interface IBaseForm {
    additionalLinks?: ILink[],
    buttonText?: string,
    submitForm?: (e: any, ref: any) => any,
    type?: 'xsmall'|'small'|'large'|'xlarge',
}

export interface IFormWithDropdownFields extends IBaseForm {
    fields: DropdownFieldType[],
}

export interface IForm extends IBaseForm {
    fields: IField[],
}

const formatformToJson = (elements: any): string => {
    let formData = new FormData(elements);
    return JSON.stringify(Object.fromEntries(formData));
};

interface TypeInterface {
    type?: 'xsmall'|'small'|'large'|'xlarge',
}

interface IBaseInput extends TypeInterface {
    field: IField,
}

const BaseInput: React.FC<IBaseInput> = ({ field, type }) => {
    const { isLoading, dispatch } = useContext(FormContext);
    return (
        <input {...{
            disabled: isLoading,
            className: `${ field.className || '' } input-${ type || '' }`,
            name: field.name,
            placeholder: field.placeholder,
            pattern: field.pattern,
            required: false,
            onChange: (event: any) => dispatch({
                payload: {
                    name: field.name,
                    value: event.target.value,
                },
                type: 'SET_VALUE'
            }),
            type: field.type || 'text',
        }}
        />
    )
};

interface FieldInterface extends TypeInterface {
    field: IField,
}


const Field: React.FC<FieldInterface> = ({ field, type }) => {
    const { isLoading } = useContext(FormContext);

    return (
        <div className={field.className || 'col-12' }>
            <div className='pt-2'>
                {
                    field.label ?
                        <label htmlFor={ field.name }>{ field.label }</label> : ''
                }
                {
                    'textarea' === field.type ?
                        <textarea {...{ name: field.name, required: true, disabled: isLoading, rows: 3, placeholder: 'Une question, un mot doux ?', className: `w-100 input-${ type || '' }` }}></textarea> :
                        <BaseInput {...{ field, type }}/>
                }
            </div>
        </div>
    );
};

interface IFormButton {
    buttonText?: string
}

const FormButton: React.FC<IFormButton> = ({ buttonText }) => {
    const { isLoading } = useContext(FormContext);
    return (
        <div className="p-1 text-center w-100">
            <button className="btn-primary btn-animated m-auto" disabled={ isLoading }>
                { isLoading ? <Spinner/> : buttonText || 'Valider' }
            </button>
        </div>
    )
};

const formProperties = ({ dispatch, ref, submitForm }: any) => {
    return {
        className: 'row',
        onSubmit: (event: any) => {
            event.preventDefault();
            dispatch({ type: 'SET_LOADING', payload: true });
            submitForm(formatformToJson(event.target), ref)
                .then(() => {
                    dispatch({ type: 'SET_LOADING', payload: false });
                });
        },
        ref
    };
};

const BaseForm: React.FC<IBaseForm> = ({ additionalLinks, buttonText, children, submitForm = async () => {} }) => {
    const { dispatch } = useContext(FormContext);
    const ref: any = useRef(null);
    return (
        <form
            {...formProperties({
                dispatch,
                ref,
                submitForm,
            })}>
            { children }
            <FormButton {...{ buttonText }}/>
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

const DropdownField: React.FC<IDropdownField> = ({ children, className, fields, name }) => {
    const { values } = useContext(FormContext);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useOutsideClick(ref, () => setOpen(false));

    return (
        <div {...{ className: `nav-item ${ className || '' }` }}>
            <div className="has-sub position-relative pt-2 w-100" ref={ref}>
                <input {...{
                    className: `w-100`,
                    disabled: false,
                    name,
                    type: 'text',
                    onFocus: () => setOpen(true),
                    placeholder: `${name} ${ values[fields[0].name] || '0' } - ${ values[fields[1].name] || 'illimité' }`,
                    readOnly: true,
                    required: false,
                }}/>
                <div className={`dropdown-menu dropdown-animated row ${ open && 'dropdown-shown' }`}>
                    {
                        fields.map((field: IField, key: number) =>
                            <div className="col-6" key={key}>
                                <BaseInput {...{ field }}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export const FormWithDropdownFields: React.FC<IFormWithDropdownFields> = ({ fields, type, ...rest }: any) => (
    <BaseForm {...rest}>
        {
            fields.map((field: any, key: number) => (
                field.fields ?
                    <DropdownField {...{ ...field, key, type }}/> :
                    <Field {...{ field, key, type }}/>
            ))
        }
    </BaseForm>
);

export const Form: React.FC<IForm> = ({ fields, type, ...rest }) => (
    <BaseForm {...rest}>
        {
            fields.map((field: IField, key: number) => (
                <Field {...{ field, key, type }}/>
            ))
        }
    </BaseForm>
);
