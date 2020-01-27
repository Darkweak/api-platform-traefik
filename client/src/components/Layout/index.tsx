import React from 'react';
import { AnimatedNavbar, NavBar } from './NavigationBar';
import './layout.css';
import { Breadcrumb, IBreadcrumb } from '../Breadcrumb';
import { Footer } from './Footer';

export * from './Icon';

export interface IChildren {
    children: JSX.Element|JSX.Element[],
}

export interface IClassName {
    className?: string,
}

interface ILayout {
    animatedNavbar?: boolean,
}

export const Layout: React.FC<IBreadcrumb & ILayout> = ({ animatedNavbar, breadcrumb, children }) => {
    return (
        <>
            <main>
                {
                    animatedNavbar ?
                        <AnimatedNavbar fixed/> :
                        <NavBar/>
                }
                { breadcrumb && <Breadcrumb {...{ breadcrumb }}/> }
                { children }
            </main>
            <Footer/>
        </>
    )
};
