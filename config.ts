
export interface ConfigType {
    siteName: string,
    socialMedia: {
        [key: string]: string
    }
    pages: Array<{
        name: string;
        path: string;
    }>
}

const config = {
    siteName: 'rachelllbucks',
    socialMedia: {
        twitter: '',
        facebook: '',
        instagram: ''
    },
    pages: [
        {
            name: 'blog',
            path: '/blog'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'random',
            path: '/random'
        },
        {
            name: 'pictures',
            path: '/pictures'
        }
    ]
} as ConfigType;


export default config;