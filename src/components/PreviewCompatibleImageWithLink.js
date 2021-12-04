import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImageWithLink = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image} = imageInfo
  const imageLink = imageInfo.link

  if (!!image && !!image.childImageSharp) {
    return (
      <a href={imageLink}>
        <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
      </a>
    )
  }

  if (!!childImageSharp) {
    return (
      <a href={imageLink}>
        <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
      </a>
    )
  }

  if (!!image && typeof image === 'string')
    return (
      <a href={imageLink}>
        <img style={imageStyle} src={image} alt={alt} />
      </a>
    )

  return null
}

PreviewCompatibleImageWithLink.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    imageLink: PropTypes.string,
  }).isRequired,
}

export default PreviewCompatibleImageWithLink
