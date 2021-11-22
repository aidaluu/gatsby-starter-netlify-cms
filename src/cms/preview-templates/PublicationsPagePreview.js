import React from 'react'
import PropTypes from 'prop-types'
import { PublicationsPageTemplate } from '../../templates/publications-page'

const PublicationsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <PublicationsPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      imagefooter={getAsset(entry.getIn(['data', 'image']))}
    />
  )
}

PublicationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PublicationsPagePreview
