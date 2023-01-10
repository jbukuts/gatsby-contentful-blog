import React from 'react';
import { Link } from "gatsby"
import * as styles from './Header.module.scss';

const { header, links } = styles;

const headerLinks = [
    {
        text: 'about',
        to: '/about'
    },
    {
        text: 'random thoughts',
        to: '/random-thoughts'
    },
    {
        text: 'pictures',
        to: '/pictures'
    }
]

const Header = () => {
    return <header className={header}>
        <h1><Link to='/'>everything is a wonder</Link></h1>
        <div className={links}>{headerLinks.map(({text, to}, index) => <h3 key={index}><Link to={to}>{text}</Link></h3>)}</div>
    </header>
}

export default Header;