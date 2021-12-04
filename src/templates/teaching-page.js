import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TeachingPageTemplate = ({heading, content, contentComponent}) => {
      const PageContent = contentComponent || Content
    
  return (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/istock-465401140_3.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `100px`,
        }}
      ></div>
    </div>
  )
}

TeachingPageTemplate.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TeachingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeachingPageTemplate
        contentComponent={HTMLContent}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  )
}

TeachingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeachingPage

export const teachingPageQuery = graphql`
query TeachingPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      heading
    }
  }
}
`
