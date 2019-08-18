import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => {
  const { allMarkdownRemark: { nodes } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              path
              title
            }
            excerpt
          }
        }
      }
    `
  )

  return (
    <Layout title='Welcome'>
      <h1>DEV JOURNAL</h1>
      <p>
        Welcome to my dev learning journal, my name is Jose and I am a Software
        Developer in the {``}
        <a
          target='__blank'
          href='https://www.google.com/maps/@53.4852488,-2.6542747,10z'
        >
          North West
        </a>
        {``} of England. I decided to start writting a journal to remind myself
        of the little things I learn every day. Although this is primarily
        focused as a personal learning experience, I hope others find it as
        informative and fun as I do. I tried to keep each post as short as
        possible, revealing a bite size discovery at a time. I work full time as
        a JavaScript Engineer, you can download my {``}
        <a
          target='__blank'
          href='https://github.com/jbonigomes/CV/raw/master/index.pdf'
        >
          CV
        </a>
        {``} or see the code behind it here {``}
        <a target='__blank' href='https://github.com/jbonigomes/cv'>
          here
        </a>
        . If you are into web development or JavaScript or have any
        comments/suggestions about this journal, why not {``}
        <a target='__blank' href='mailto:jbonigomes@yahoo.com.br'>
          get in touch
        </a>
        {``} or just scroll down and read the articles.
      </p>

      {nodes.map((post) => (
        <article key={post.frontmatter.path}>
          <Link to={post.frontmatter.path}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <h3>
            <FontAwesomeIcon icon={faClock} /> {post.frontmatter.date}
          </h3>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default IndexPage
