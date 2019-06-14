import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "root/components/Layout";
import Typography from "root/components/Typography";
import Navbar from "root/components/Navbar";
import Section from "root/components/Section";
import Footer from "root/components/Footer";
// import BlogPostPreview from "root/components/BlogPostPreview";
import FeaturedBlogPostPreview from "root/components/FeaturedBlogPostPreview";

import "./blog.css";

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            path
            author
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
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
  const getAuthorInfo = node =>
    // eslint-disable-next-line
     require(`../../blog/authors/${node.frontmatter.author}.json`)
  ;

  return (
    <Layout title="Blog | SVHealth" description="SVHealth's Blog">
      <Navbar currentPage="blog" theme="primary" />
      <Section verticalSpacing={false}>
        <div styleName="root">
          <div
            key={edges[0].node.frontmatter.path}
            styleName="featured-blog-preview"
          >
            <FeaturedBlogPostPreview
              {...edges[0].node.frontmatter}
              author={getAuthorInfo(edges[0].node)}
            />
          </div>

          <div styleName="more-coming-soon">
            <Typography variant="h3" weight="medium" color="oxford-blue">
              More words coming soon
            </Typography>
          </div>
          {/* UNCOMMENT TO RENDER ALL POSTS

          <div styleName="root">
        {edges.map(({ node }, index) => {
          // eslint-disable-next-line
          const author = require(`../../blog/authors/${
            node.frontmatter.author
          }.json`);

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

      */}
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