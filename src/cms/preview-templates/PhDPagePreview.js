import React from 'react'
import PropTypes from 'prop-types'
import { PhDPageTemplate } from '../../templates/phd-page'

const PhDPagePreview = ({ entry, widgetFor }) => (
  <PhDPageTemplate
    title={entry.getIn(['data', 'title', 'heading'])}
    content={widgetFor('body')}
  />
)

PhDPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PhDPagePreview
