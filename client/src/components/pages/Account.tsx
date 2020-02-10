import React from 'react';
import { Icon, Layout } from '../Layout';
import { Firstname, Lastname, Username } from '../../helpers';
import { Table } from '../Table';
import { GreenButton } from '../Button';
import { ChangePasswordForm } from '../Form';

export const Account: React.FC = () => {
    return (
        <Layout>
            <div className="panel content">
                <h1 className="text-primary text-center">
                    Bienvenue sur votre profil {new Firstname().get()}
                </h1>
                <div className="row">
                    <div className="col-6">
                        <div className="frame">
                            <div className="frame-header">
                                <h2 className="text-center">
                                    Votre dossier
                                </h2>
                            </div>
                            <div className="frame__body">
                                <Table
                                    data={[
                                        {
                                            id: '1',
                                            expiration: '01-01-2021',
                                            name: 'Fiches de paie',
                                        },
                                        {
                                            id: '2',
                                            expiration: '01-01-2021',
                                            name: 'Pièce d\'identité',
                                        },
                                        {
                                            id: '3',
                                            expiration: '-',
                                            name: 'Passeport',
                                        },
                                    ]}
                                    headers={[ 'name', 'expiration' ]}
                                    withHeaders
                                    selectable/>
                            </div>
                            <div className="frame__body">
                                <p className="text-center text-primary">
                                    Il manque encore les fichiers suivants:
                                </p>
                                <ul>
                                    <li>Attestation d'hébergement</li>
                                    <li>Avis d'imposition</li>
                                </ul>
                            </div>
                            <div className="frame__footer d-flex">
                                <div className="m-auto">
                                    <GreenButton>
                                        <Icon icon="plus"/>
                                        <span className="my-auto">
                                        Ajouter un fichier
                                    </span>
                                    </GreenButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col-12">
                            <div className="frame">
                                <div className="frame-header">
                                    <h2 className="text-center">
                                        Informations
                                    </h2>
                                </div>
                                <div className="frame__body">
                                    <ul>
                                        <li>Prénom: { new Firstname().get() }</li>
                                        <li>Nom: { new Lastname().get() }</li>
                                        <li>Email: { new Username().get() }</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="frame">
                                <div className="frame-header">
                                    <h2 className="text-center word-break">
                                        Changer le mot de passe
                                    </h2>
                                </div>
                                <div className="frame__body">
                                    <ChangePasswordForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
