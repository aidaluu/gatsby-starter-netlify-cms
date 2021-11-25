import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
            //backgroundImage: `url('/img/20211125_150224_2.jpg')`,
            //backgroundPosition: `top left`,
            //backgroundAttachment: `fixed`,
            height: `100px`,
          }}
        ></div>
      </Layout>
    )
  }
}
