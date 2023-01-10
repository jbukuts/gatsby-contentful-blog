import fetch from 'isomorphic-fetch';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';
import type { GatsbyNode } from 'gatsby';
import path from 'path';
import { slugify } from './helpers';

const CONTENTFUL_API_URL = 'https://graphql.contentful.com';
const { CONTENTFUL_API_KEY, CONTENTFUL_SPACE, CONTENTFUL_ENV } = process.env;

interface BlogPostItem {
    title: string;
    content: any;
    sys: {
        publishedAt: string;
        firstPublishedAt: string;
    }
}

interface LocalBlogPost extends BlogPostItem {
    id: string
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async (sourceNodes) => {
    const {actions, createNodeId, createContentDigest} = sourceNodes;
    const { createNode } = actions;

    // get content from contentful GraphQL API
    const apiURL = `${CONTENTFUL_API_URL}/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${CONTENTFUL_ENV}`;
    console.log(apiURL);
    const contentfulResponse = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONTENTFUL_API_KEY}`
        },
        body: JSON.stringify({
            query: `{
                blogPostCollection {
                    items {
                        title,
                        content { json },
                        sys {
                            publishedAt,
                            firstPublishedAt
                        }
                    }
                }
            }`
        })
    }).then(r => r.json());

    // iterate over response and create nodes
    contentfulResponse.data.blogPostCollection.items.forEach((item: BlogPostItem) => {
        const { title, content: { json }, sys: { publishedAt, firstPublishedAt} } = item;

        // convert rich content to html string
        const contentData = {
            title: title,
            content: documentToHtmlString(json as Document) as string,
            publishedAt,
            firstPublishedAt
        };
        
        // create and add node
        const nodeMeta  = {
            id: createNodeId(`blog-post-${title}`),
            parent: null,
            children: [],
            internal: {
                type: 'BlogPost',
                mediaType: 'text/html',
                content: JSON.stringify(contentData),
                contentDigest: createContentDigest(contentData)
            }
        }

        const node = Object.assign({}, contentData, nodeMeta);
        createNode(node);
    });
}

// creates the pages
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const {createPage } = actions;
    const template = path.resolve('./src/pages/post/{BlogPost.title}.tsx');
    const res: any = await graphql(`
        query {
            allBlogPost{
                nodes {
                    id,
                    content,
                    title
                }
            }
        }
    `);

    const { nodes } = res.data.allBlogPost;

    nodes.forEach((node: LocalBlogPost) => {
        const { title, content, id } = node;

        createPage({
            component: template,
            path: 'test/' + slugify(title),
            context: {
                id
            }
        })
    })
}