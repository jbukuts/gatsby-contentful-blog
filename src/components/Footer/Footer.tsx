import React from 'react';
import * as styles from './Footer.module.scss';

const { footer } = styles;

const EMOTICONS = [
    '(づ ՞ਊ ՞ )づ',
    '(ΦωΦ)',
    '( ˘▽˘)っ♨',
    '(๑˘ᵕ˘)',
    '(⋋°̧̧̧ω°̧̧̧⋌)'
];

const Footer = () => {
    return <footer className={footer}>
        <marquee>
            <pre>{[].concat.apply([], new Array(10).fill(EMOTICONS)).join('  ')}</pre>
        </marquee>
    </footer>
}

export default Footer;