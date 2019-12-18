import React from 'react';

interface ISocial {
    icon: string,
    link: string,
    type?: string,
}

const socials: ISocial[] = [
    {
        icon: 'twitter',
        link: 'https://twitter.com/darkweak_dev'
    },
    {
        icon: 'github',
        link: 'https://github.com/darkweak'
    },
    {
        icon: 'laptop-code',
        link: 'https://devcv.fr',
        type: 'fas'
    },
];

export const Footer = () => (
    <footer className="no-margin-vertical bg--green-sea">
        <div className="g--10 m--1 d-flex">
            <span className="d-flex m-auto">
            {
                socials.map((social: ISocial, index: number) =>
                    <div key={index} className="px-1">
                        <a href={social.link}>
                            <h2 className="m-0 color--paper">
                                <i className={`${social.type || 'fab'} fa-${social.icon}`}/>
                            </h2>
                        </a>
                    </div>
                )
            }
        </span>
        </div>
    </footer>
);
