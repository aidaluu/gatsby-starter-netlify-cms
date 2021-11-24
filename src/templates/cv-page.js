import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CVPageTemplate = ({title, heading, content, contentComponent}) => {
      const PageContent = contentComponent || Content
    
  return (
    <div className="content">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/IMG_20150620_08554_1.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `300px`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #F2C2D4, -0.5rem 0 0 #F2C2D4',
            backgroundColor: '#F2C2D4',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
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
          backgroundImage: `url('/img/IMG_20150620_08554_1.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `100px`,
        }}
      ></div>
    </div>
  )
}

CVPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CVPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CVPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  )
}

CVPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CVPage

export const cvPageQuery = graphql`
query CVPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      heading
    }
  }
}
`
