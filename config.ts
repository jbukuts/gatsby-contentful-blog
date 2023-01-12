
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
        instagrame: ''
    },
    pages: [
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'random thoughts',
            path: '/random-thoughts'
        },
        {
            name: 'pictures',
            path: '/about'
        }
    ]
} as ConfigType;


export default config;