import React from 'react';
import { Icon, Layout } from '../Layout';
import { BounceIn, FadeInFromBottom } from '../Visible';
import { ContactForm } from '../Form';
import { Link } from 'react-router-dom';

interface ITile {
    description: string;
    icon: string;
    title: string;
}

const tiles: ITile[] = [
    {
        description: 'Le service s\'appuie sur les résultats des différents sites comme Seloger, Bienici ou encore Paruvendu pour ne citer que les sites les plus connus',
        icon: 'box-full',
        title: 'Complet'
    },
    {
        description: 'Nous assurons votre anonymat pour éviter de vous faire tracker et éviter de recevoir des tas d\'emails indésirables à la suite de vos recherches',
        icon: 'user-secret',
        title: 'Anonyme'
    },
    {
        description: 'Créez votre dossier une seule fois et envoyez-le à autant de fois que vous le souhaitez. Une fois que ce dossier est réalisé vous n\'avez plus qu\'à sélectionner des appartements pour l\'envoyer',
        icon: 'compress-arrows-alt',
        title: 'Centralisation'
    },
    {
        description: 'Un service 100% gratuit, afin de permettre à quiconque de pouvoir l\'utiliser',
        icon: 'euro-sign',
        title: 'Gratuit'
    }
];

export const Welcome: React.FC = () => {
    return (
        <Layout animatedNavbar>
            <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                <div className="hero-body">
                    <FadeInFromBottom className="content u-text-center" delay={2}>
                        <h1 className="uppercase white title">Trouve ton appart'</h1>
                        <div className="btn-container">
                            <Link to='search'>
                                <button className="btn-primary outline btn-animated m-auto">
                                    <h4>
                                        <i className="fas fa-chevron-right"/>
                                        <i className="fas fa-chevron-right"/> Commencer <i className="fas fa-chevron-left"/>
                                        <i className="fas fa-chevron-left"/>
                                    </h4>
                                </button>
                            </Link>
                        </div>
                    </FadeInFromBottom>
                </div>
            </div>
            <div className="panel">
                <div className="content z-1">
                    <h2 className="text-center">
                        Les avantages du service
                    </h2>
                    <div className="row">
                        {
                            tiles.map((tile: ITile, key: number) => (
                                <BounceIn {...{
                                    className: 'col-6 pb-2',
                                    key,
                                }}>
                                    <div className="tile doc-tile">
                                        <div className="tile__container text-justify">
                                                <span className="icon d-flex">
                                                    <Icon {...{
                                                        className: 'large m-auto',
                                                        icon: tile.icon,
                                                    }}/>
                                                    <h4 className="tile__title pl-1">{ tile.title }</h4>
                                                </span>
                                            <p className="tile__subtitle lead">
                                                { tile.description }
                                            </p>
                                        </div>
                                    </div>
                                </BounceIn>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="panel bg-primary skew-top-left-primary position-relative">
                <div className="content">
                    <h2 className="text-center text-light">
                        Contact
                    </h2>
                    <FadeInFromBottom className='card'>
                        <ContactForm/>
                    </FadeInFromBottom>
                </div>
            </div>
        </Layout>
    )
};
