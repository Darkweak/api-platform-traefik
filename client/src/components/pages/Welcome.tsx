import React from 'react';
import { Icon, Layout } from '../Layout';
import { WavyHeader } from '../Wave';
import { LightPilledButton } from '../Button';
import { Container } from 'react-bootstrap';
import { Section, SectionInterface } from '../Section';
import { FadeInFromBottom } from '../Visible';
import { CustomLink } from '../CustomLink';

const descriptions: SectionInterface[] = [
    {
        description: (
            <>
                Je m'appelle Sylvain COMBRAQUE et je suis actuellement développeur full-stack chez <CustomLink
                href='https://les-tilleuls.coop'>
                les-tilleuls.coop
            </CustomLink>, passioné par le développement,
                en particulier le développement web car cela permet de mettre à parti la créativité d'une personne.
            </>
        ),
        title: 'Qui suis-je ?',
    },
    {
        description: (
            <>
                Créateur d'un système de cache pour Træfik nommé <CustomLink
                href='https://github.com/darkweak/Souin'>Souin</CustomLink>.
                Ce système de cache est compatible avec n'importe quel reverse proxy (Apache, Nginx) depuis la v1.1.
                J'ai pu notament expérimenter la mise en place d'un template pour une marketplace que vous pouvez
                retrouver le site à <CustomLink href='https://marketplace.devcv.fr'>cette adresse</CustomLink>.
                Ce service est open-source, gratuit et sans publicités, vous avez toutes les sources disponibles sur
                mon Github : <CustomLink href='https://github.com/darkweak/Marketplace'>Marketplace</CustomLink>.
                Par exemple ce projet m'a permis de mettre en pratique API Platform (ReactJS pour la partie client,
                Symfony pour le back-office) avec Traefik (pour la gestion des services avec un reverse proxy et le
                load-balancing), NodeJS (pour le Server-Side Rendering du client), le tout packagé avec Swarm (pour
                l'orchestration et le scaling des conteneurs).
            </>
        ),
        title: 'Un développeur passionné',
    },
    {
        description: (
            <>
                Être un contributeur sur des projets open-sources permet de s'améliorer dans les différents
                langages, de se tenir informer des nouvelles technologies et de se forcer à respecter les bonnes
                pratiques de développement d'autant plus que chaque langage a ses normes de codage.
            </>
        ),
        title: 'Mes dernières conférences',
    },
];

export const Welcome: React.FC = () => (
    <Layout>
        <WavyHeader>
            <FadeInFromBottom className='mx-auto text-uppercase'>
                <span className='h1 text-center font-weight-lighter text-white m-auto col-12 pb-4 pb-sm-0'>
                    Sylvain COMBRAQUE
                </span>
                <span className='h5 text-center font-weight-lighter text-white m-auto col-12'>
                    développeur - conférencier
                </span>
                <div className='w-100 pt-5 text-center'>
                    <LightPilledButton outlined>
                        <span className='fs-3 text-center font-weight-lighter p-2'>
                            <Icon icon='download'/> Télécharger mon CV
                        </span>
                    </LightPilledButton>
                </div>
            </FadeInFromBottom>
        </WavyHeader>
        {
            descriptions.map((description, index) => (
                <div key={index} className={`text-justify bg-light ${index > 0 && 'py-5'}`}>
                    <FadeInFromBottom>
                        <Container>
                            <Section {...description}/>
                        </Container>
                    </FadeInFromBottom>
                </div>
            ))
        }
    </Layout>
);
