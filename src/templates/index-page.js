import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  subheading,
  mainpitch,
  content1,
  content2,
  content3,
}) => (
  <div>
    <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/istock-465401140_2.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `400px`,
        }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#F2C2D4 0.5rem 0px 0px, #F2C2D4 -0.5rem 0px 0px',
            backgroundColor: '#F2C2D4',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <br></br>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#F2C2D4 0.5rem 0px 0px, #F2C2D4 -0.5rem 0px 0px',
            backgroundColor: '#F2C2D4',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            width: '400px',
            textAlign: 'center'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h3 className="has-text-weight-semibold is-size-2">{mainpitch.title}</h3>
                  </div>
                  <div className="tile">
                    <p>{mainpitch.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">
                      {content1.title}
                    </h1>
                    <p>{content1.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to={content1.linkto}>
                      {content1.buttontext}
                    </Link>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                  <h1 className="title">
                      {content2.title}
                    </h1>
                    <p>{content2.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to={content2.linkto}>
                      {content2.buttontext}
                    </Link>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">
                      {content3.title}
                    </h1>
                    <p>{content3.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to={content3.linkto}>
                      {content3.buttontext}
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h1 className="title">
                    Public Philosophy
                  </h1>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url('/img/istock-465401140_2.jpg')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `100px`,
        }}
    ></div>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  content1: PropTypes.object,
  content2: PropTypes.object,
  content3: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        content1={frontmatter.content1}
        content2={frontmatter.content2}
        content3={frontmatter.content3}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        mainpitch {
          title
          description
        }
        content1 {
          title
          description
          buttontext
          linkto
        }
        content2 {
          title
          description
          buttontext
          linkto
        }
        content3 {
          title
          description
          buttontext
          linkto
        }
      }
    }
  }
`
