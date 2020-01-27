import React from 'react';

export const Footer = () => (
    <footer className="u-no-margin text-center text-light">
        <h5>
            © All rights reserved - { (new Date()).getFullYear() }
        </h5>
    </footer>
);
