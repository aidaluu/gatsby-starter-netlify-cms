import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({title, content, contentComponent}) => {
      const PageContent = contentComponent || Content
    
  return (
    <div className="content">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/20150613_175857_1.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
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
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/20150613_175857_1.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `150px`,
        }}
      ></div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
query AboutPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
    }
  }
}
`
