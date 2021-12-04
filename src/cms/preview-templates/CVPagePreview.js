import React from 'react'
import PropTypes from 'prop-types'
import { CVPageTemplate } from '../../templates/cv-page'

const CVPagePreview = ({ entry, widgetFor }) => (
  <CVPageTemplate
    title={entry.getIn(['data', 'heading'])}
    content={widgetFor('body')}
  />
)

CVPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CVPagePreview
