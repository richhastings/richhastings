import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Panel from '../components/Panel'
import Heading from '../components/Heading'

export default class IndexPage extends React.Component {
  render() {
    const { data, location } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout pathname={location.pathname}>
        <Panel>
          <Heading level="1">Rich Hastings</Heading>
        </Panel>
        <Panel dark>
          <Heading level="1">Rich Hastings</Heading>
        </Panel>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
