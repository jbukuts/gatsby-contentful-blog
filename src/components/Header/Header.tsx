import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from "gatsby"
import * as styles from './Header.module.scss';
import config, { ConfigType } from '../../../config';
import { Menu, Close } from '@carbon/icons-react';
import cx from 'classnames';
import usePxToRem from '../../hooks/usePxToRem';

const { header, links, socials, burgerButton, hidden, breakpointMd } = styles;
const { pages, siteName, socialMedia } = config as ConfigType;

interface HeaderProps {
    currentPath: string;
}

const ICON_SIZE = 32;

const Header = ({ currentPath }: HeaderProps) => {
    const [open, setOpen] = useState(false);
    const pxToRem = usePxToRem();
    
    // listener to ensure that resizing the window wont immediately show the menu
    useEffect(() => {
        const handleResize = () => {
            if (pxToRem(window.innerWidth) > parseInt(breakpointMd.replace(/\D/g,''))) 
                setOpen(false);
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // on page change hide the menu
    useEffect(() => {
        setOpen(false);
    }, [currentPath]);

    // why not overcomplicate things?
    const SocialIcon = (key: string) => useMemo(() => (
        React.createElement(
            React.lazy(() => import(`@iconscout/react-unicons/icons/uil-${key}`)), 
            {size: ICON_SIZE, key}
        )
    ), [key]);

    return <header className={header}>
        <h1><Link to='/'>{siteName}</Link></h1>

        <div className={cx(links, !open && hidden)}>
            {pages.map(({name, path}, index: number) => (
                <h3 key={index} style={{ textDecoration: currentPath.startsWith(path) ? 'underline' : 'none'}}>
                    <Link to={path}>{name}</Link>
                </h3>
            ))}
        </div>

        <div className={socials}>
            <Suspense>
                {Object.keys(socialMedia).map(key => SocialIcon(key))}
            </Suspense>
        </div>
        <button onClick={() => setOpen(c => !c)} className={burgerButton}>
            {React.createElement(open ? Close : Menu, {size: ICON_SIZE})}
        </button>
    </header>
}

export default Header;