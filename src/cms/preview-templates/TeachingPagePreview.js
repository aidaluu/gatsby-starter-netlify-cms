import React from 'react'
import PropTypes from 'prop-types'
import { TeachingPageTemplate } from '../../templates/teaching-page'

const TeachingPagePreview = ({ entry, widgetFor }) => (
  <TeachingPageTemplate
    title={entry.getIn(['data', 'heading'])}
    content={widgetFor('body')}
  />
)

TeachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeachingPagePreview
