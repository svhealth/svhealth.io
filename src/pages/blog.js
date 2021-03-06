import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Section from "root/components/Section";
import Footer from "root/components/Footer";
import BlogPostPreview from "root/components/BlogPostPreview";
import FeaturedBlogPostPreview from "root/components/FeaturedBlogPostPreview";

import "./blog.css";

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            path
            author {
              childAuthorsJson {
                name
                twitter
                position
              }
            }
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              image: childImageSharp {
                fluid(maxWidth: 1440, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Blog({
  data: {
    allMdx: { edges },
  },
}) {
  return (
    <Layout title="Blog | Aurora" description="Aurora's Blog">
      <Navbar currentPage="blog" theme="primary" />
      <Section verticalSpacing={false}>
        <div styleName="root">
          {edges.map(({ node }, index) => {
            const author = node.frontmatter.author.childAuthorsJson;

            if (index === 0) {
              return (
                <div
                  key={node.frontmatter.path}
                  styleName="featured-blog-preview"
                >
                  <FeaturedBlogPostPreview
                    {...node.frontmatter}
                    author={author}
                  />
                </div>
              );
            }

            return (
              <div key={node.frontmatter.path} styleName="blog-preview">
                <BlogPostPreview {...node.frontmatter} author={author} />
              </div>
            );
          })}
        </div>
      </Section>
      <Footer />
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
  }).isRequired,
};

export default Blog;
