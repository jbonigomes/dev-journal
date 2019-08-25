import React from 'react'
import { graphql, Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layout'

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title={frontmatter.title}>
      <Link to='/' className='backLink'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>{frontmatter.title}</h1>
      <h3><FontAwesomeIcon icon={faClock} /> {frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Disqus
        config={{
          title: frontmatter.title,
          identifier: frontmatter.path,
          url: `https://jbonigomes.com${frontmatter.path}`,
        }}
      />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
