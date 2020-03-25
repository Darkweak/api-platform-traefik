import React, { useContext, useEffect, useState } from 'react';
import { navbarRoutes } from '../../routes';
import './layout.css';
import { Container, Nav, Navbar as BNavbar, NavDropdown as BNavDropdown } from 'react-bootstrap';
import { NavDropdown, NavLink } from './Navbar';
import { hasWindow } from '../../helpers';
import { AllowedLanguages, LanguageContext } from '../../contexts';

const MAX_SCROLL = 120;

interface LanguageInterface {
    value: AllowedLanguages,
    label: string,
}

const languages: LanguageInterface[] = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'fr',
        label: 'Français',
    },
];

export const NavBar = () => {
    const [top, setTop] = useState(hasWindow() && window.scrollY < MAX_SCROLL);
    const {language, setSelectedLanguage} = useContext(LanguageContext);

    const handleScroll = () => {
        setTop(hasWindow() && window.scrollY < MAX_SCROLL);
    };

    useEffect(() => {
        hasWindow() && window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BNavbar
            bg={top ? 'transparent scale-text' : 'gradient'}
            collapseOnSelect
            expand='lg'
            sticky='top'
            variant='dark'
        >
            <Container>
                <BNavbar.Brand href='/'>&lt;devcv/&gt;</BNavbar.Brand>
                <BNavbar.Toggle aria-controls='appbar'/>
                <BNavbar.Collapse id='appbar'>
                    <Nav className='ml-auto'>
                        {
                            navbarRoutes.map((route, index) => (
                                <NavLink key={index} route={route}/>
                            ))
                        }
                        <NavDropdown title='language' icon='language'>
                            {
                                languages.map((l, index) => (
                                    <BNavDropdown.Item
                                        key={index}
                                        onClick={() => setSelectedLanguage(l.value)}
                                        active={language === l.value}
                                    >
                                        {l.label}
                                    </BNavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    )
};
