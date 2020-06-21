import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template(
  {
    data // this prop will be injected by the GraphQL query below.
  }
) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name + " - " + frontmatter.role} />
      <h2 className="lead">{frontmatter.name}</h2>
      <h4 className="quiet">{frontmatter.role}</h4>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p class="center">
        <em><a href="/stories">Ready to read another story?</a></em>
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        name
        role
      }
    }
  }
`;
