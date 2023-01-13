import * as React from "react"
import { graphql, Link } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby";
import * as styles from '../../styles/pages/index.module.scss';
import { slugify } from "../../../helpers";
import config from '../../../config';

const { postCard } = styles;

interface IndexPageProps extends PageProps {
    data: {
        allContentfulBlogPost: {
            nodes: Array<any>
        }
    }
}

const IndexPage: React.FC<IndexPageProps> = (props) => {
    const { data: { allContentfulBlogPost: { nodes } }} = props; 

    return (
        <>
            {nodes.map(({title, createdAt}, index) => 
                <Link to={`/blog/${slugify(title)}/`} className={postCard} key={index}>
                    <h2>{title}</h2>
                    <p>{createdAt}</p>
                </Link>
            )}
        </>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allContentfulBlogPost(sort: {createdAt: DESC}) {
            nodes {
                title
                createdAt(formatString: "LL")
                updatedAt(formatString: "LL")
            }
        }
    }
`;

export const Head: HeadFC = () => <title>{config.siteName} - home</title>
