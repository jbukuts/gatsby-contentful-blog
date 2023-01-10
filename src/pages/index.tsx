import * as React from "react"
import { graphql, Link } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby";
import * as styles from '../styles/pages/index.module.scss';
import { slugify } from "../../helpers";

const { postCard } = styles;

interface IndexPageProps extends PageProps {
    data: {
        allBlogPost: {
            nodes: Array<any>
        }
    }
}

const IndexPage: React.FC<IndexPageProps> = (props) => {
    console.log(props);
    const { data: { allBlogPost: { nodes } }} = props; 

    return (
        <>
            {nodes.map(({title, publishedAt, firstPublishedAt}, index) => 
                <Link to={`/post/${slugify(title)}/`} className={postCard}>
                    <div key={index}>
                        <h3>{title}</h3>
                        <p>published {firstPublishedAt}</p>
                        <p>updated {publishedAt}</p>
                    </div>
                </Link>
            )}
        </>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allBlogPost {
            nodes {
                title
                publishedAt(formatString: "LL")
                firstPublishedAt(formatString: "LL")
            }
        }
    }
`;

export const Head: HeadFC = () => <title>Home Page</title>
