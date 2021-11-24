import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/20150613_175857_1.jpg')`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            height: `300px`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #F2C2D4, -0.5rem 0 0 #F2C2D4',
              backgroundColor: '#F2C2D4',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/20150613_175857_1.jpg')`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            height: `100px`,
          }}
        ></div>
      </Layout>
    )
  }
}
