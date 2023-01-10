import React from 'react';
import { graphql } from 'gatsby'

interface BlogPostProps {
    data: {
        blogPost: {
            content: string;
            title: string;
        }
    }
}

const BlogPost = ({data}: BlogPostProps) => {
    const { blogPost: { content, title }} = data;

    return <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
}

export default BlogPost;

export const pageQuery = graphql`
    query($id: String!) {
        blogPost(id: { eq:$id}) {
            content,
            title,
            id
        }
    }
`;