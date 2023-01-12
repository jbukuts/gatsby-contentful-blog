import React from 'react';
import { Link } from "gatsby"
import * as styles from './Header.module.scss';
import config, { ConfigType } from '../../../config';
import { LogoInstagram, LogoFacebook, LogoTwitter } from '@carbon/icons-react';

const { header, links, socials } = styles;
const { pages, siteName } = config as ConfigType;

const Header = () => {
    return <header className={header}>
        <h1><Link to='/'>{siteName}</Link></h1>
        <div>
            <div className={links}>{pages.map(({name, path}, index: number) => <h3 key={index}><Link to={path}>{name}</Link></h3>)}</div>
            <div className={socials}>
                <LogoInstagram size={24}/>
                <LogoFacebook size={24}/>
                <LogoTwitter size={24}/>
            </div>
       </div>        
    </header>
}

export default Header;