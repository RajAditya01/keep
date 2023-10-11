import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <p>copyright © {year} Aditya All rights reserved</p>
        </footer>
        </>
    );
};

export default Footer;
