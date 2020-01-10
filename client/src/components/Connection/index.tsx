import React, { useContext, useState } from 'react';
import { FlippedForm } from '../Form/FlippedForm';
import { HOME, LOGIN, REGISTER } from '../Breadcrumb';
import { Layout } from '../Layout';
import { ILoginUser, login, register } from '../../actions/user';
import { useRedirection } from '../../hooks';
import { ClientContext } from '../../contexts';
import { IForm } from '../Form';
import { email, firstname, lastname, password, username } from '../Form/Field';

interface IConnection {
    firstForm: IForm;
    page: 'login'|'register';
    secondForm: IForm;
}

export const getClient = (updateClient: any): IForm => ({
    additionalLinks: [
        {
            label: 'Pas encore de compte ?',
            path: '/register',
        }
    ],
    fields: [
        username(),
        password()
    ],
    submitForm: (data: ILoginUser, ref: any) => login(data, updateClient, ref)
});

export const getRegister = (): IForm => ({
    additionalLinks: [
        {
            label: 'Déjà inscrit ?',
            path: '/login',
        }
    ],
    fields: [
        lastname('g--6 g-t--12'),
        firstname('g--6 g-t--12'),
        email(),
        password()
    ],
    submitForm: register
});

const getSelectedPage = (value: boolean, page: 'login'|'register'): 'login'|'register' => {
    switch (page) {
        case 'login':
            return value ? 'login' : 'register';
        case 'register':
            return value ? 'login' : 'register';
    }
};

export const Connection: React.FC<IConnection> = ({ children, firstForm, page, secondForm }) => {
    const [selectedPage, setSelectedPage] = useState<'login'|'register'>(page);
    const { logged } = useContext(ClientContext);
    useRedirection(logged);
    const flipped = page === selectedPage;

    return (
        <Layout pageName={`pages.${selectedPage}.title`} breadcrumb={[ HOME, 'login' === selectedPage ? LOGIN : REGISTER ]}>
            <div className="g--6 m--3 g-m--8 m-m--2 g-s--10 m-s--1 g-t--12 m-t--0 fade-in-from-bottom anim-delay--5">
                <FlippedForm {...{
                    id: 'connexion',
                    flipped,
                    form: flipped ? firstForm : secondForm,
                    setFlipped: (value: boolean) => setSelectedPage(getSelectedPage(value, selectedPage)),
                }}>
                    { children }
                </FlippedForm>
            </div>
        </Layout>
    )
};
