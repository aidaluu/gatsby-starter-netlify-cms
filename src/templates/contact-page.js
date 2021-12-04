import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({title, heading, content, contentComponent}) => {
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

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
query ContactPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      heading
    }
  }
}
`
