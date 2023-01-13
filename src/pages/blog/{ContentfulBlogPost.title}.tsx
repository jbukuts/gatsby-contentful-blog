import React from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import config from '../../../config';
import type { HeadFC } from "gatsby";
import * as styles from '../../styles/pages/blog-post.module.scss';
import { BLOCKS } from "@contentful/rich-text-types";
// import { useContentfulImage } from "gatsby-source-contentful/hooks";

const { content, assetImage } = styles;

interface BlogPostContentRefs {
    contentful_id: string;
    url: string;
    height: number;
    width: number;
    description: string;
};

interface BlogPostProps {
    data: {
        contentfulBlogPost: {
            content: {
                raw: string;
                references: Array<BlogPostContentRefs>;
            };
            title: string;
        }
    }
}

const renderOptions = (references: Array<BlogPostContentRefs>) => {
    const referencesMap = new Map();
    references.forEach((ref: BlogPostContentRefs) => {
        const { contentful_id, url, height, width, description } = ref;
        referencesMap.set(contentful_id, {
            url,
            src: url,
            height,
            width,
            alt: description || ''
        });
    });

    return {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const assetData = referencesMap.get(node.data?.target?.sys?.id);
                if (!assetData) return;
                // return <GatsbyImage alt='' image={useContentfulImage({ image: assetData})}></GatsbyImage>
                return (
                    <img className={assetImage} {...assetData} />
                );
            },
        },
  };
}

const BlogPost = ({data}: BlogPostProps) => {
    const { contentfulBlogPost: { content: { raw, references }, title }} = data;

    return <div className={content}>
        <h1>{title}</h1>
        {documentToReactComponents(JSON.parse(raw), renderOptions(references))}
    </div>
}

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulBlogPost(id: { eq: $id }) {
            content {
                raw,
                references {
                    contentful_id,
                    url,
                    height,
                    width,
                    description
                }
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