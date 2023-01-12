import React from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import config from '../../../config';
import type { HeadFC } from "gatsby";
import * as styles from '../../styles/pages/blog-post.module.scss';

const { content } = styles;

interface BlogPostProps {
    data: {
        contentfulBlogPost: {
            content: any;
            title: string;
        }
    }
}

const BlogPost = ({data}: BlogPostProps) => {
    const { contentfulBlogPost: { content: { raw }, title }} = data;

    return <div className={content}>
        <h1>{title}</h1>
        {documentToReactComponents(JSON.parse(raw))}
    </div>
}

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulBlogPost(id: { eq: $id }) {
            content {
                raw
            },
            title,
            id
        }
    }
`;

export const Head: HeadFC = ({data}) => {
    const { contentfulBlogPost: { title }} = data as BlogPostProps['data'];
    return <title>{config.siteName} - {title}</title>
}