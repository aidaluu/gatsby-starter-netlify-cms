import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImageWithLink from '../components/PreviewCompatibleImageWithLink'

let counter = 0;

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item) => (
      <div key={item.text}>
        <section className="section">
          { isEvenColumn() ? <ImageLeft item={item}/> : <ImageRight item={item}/> }
        </section>
      </div>
    ))}
  </div>
)

function isEvenColumn(){
  counter ++
  return counter % 2 === 0
}

function ImageRight(props) {
  const item = props.item
  return (
    <div className="columns">
      <div className="column is-5">
        <PreviewCompatibleImageWithLink imageInfo={item} />
      </div>
      <div className="column is-7">
        <a href={item.link}><h3>{item.title}</h3></a>
        <p>{item.text}</p>
      </div>
  </div>
  )
}

function ImageLeft(props) {
  const item = props.item
  return (
    <div className="columns">
      <div className="column is-7">
        <a href={item.link}><h3>{item.title}</h3></a>
        <p>{item.text}</p>
      </div>
      <div className="column is-5">
        <PreviewCompatibleImageWithLink imageInfo={item} />
      </div>
  </div>
  )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default FeatureGrid
