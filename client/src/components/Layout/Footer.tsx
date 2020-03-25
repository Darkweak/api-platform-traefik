import React from 'react';
import { Icon } from './Icon';
import { CustomLink } from '../CustomLink';

interface ISocial {
    icon: string,
    link: string,
    type?: 'fab' | 'far',
}

const socials: ISocial[] = [
    {
        icon: 'twitter',
        link: 'https://twitter.com/darkweak_dev',
        type: 'fab',
    },
    {
        icon: 'github',
        link: 'https://github.com/darkweak',
        type: 'fab',
    },
    {
        icon: 'laptop-code',
        link: 'https://devcv.fr'
    },
];

export const Footer = () => (
    <footer className='border-top'>
        <div className='container py-3'>
            <div className='row fs-3'>
                <div className='col-xs-12 col-md-4 text-center align-self-center py-2'>
                    <span className='text-white'>
                        <Icon icon='code'/> Developped by Darkweak
                    </span>
                </div>
                <div className='col-xs-12 col-md-4 text-center align-self-center py-2'>
                    <span className='text-white'>
                        Made with <Icon icon='heart'/>
                    </span>
                </div>
                <div className='col-xs-12 col-md-4 text-center align-self-center py-2'>
                    <span className='text-white'>Find me on</span><br/>
                    <div className='text-white d-flex'>
                        <div className='m-auto'>
                            {
                                socials.map((social, index) => (
                                    <span key={index} className='px-1'>
                                        <CustomLink className='text-white fs-4' href={social.link}>
                                            <Icon {...social}/>
                                        </CustomLink>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-c pt-2 pb-2'>
            <div className='container text-white-50 text-center'>
                © Sylvain COMBRAQUE
            </div>
        </div>
    </footer>
);
