import React from 'react';
import { NavBar } from './NavigationBar';
import './layout.css';
import { Footer } from './Footer';

export interface ClassNameInterface {
    className?: string,
}

export const Layout: React.FC = ({children}) => (
    <div className='bg-gradient'>
        <main>
            <NavBar/>
            <div className='pt-4'>
                {children}
            </div>
        </main>
        <Footer/>
    </div>
);

export * from './Footer';
export * from './Icon';
export * from './Navbar';
