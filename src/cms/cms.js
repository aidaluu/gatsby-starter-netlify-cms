import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PublicationsPagePreview from './preview-templates/PublicationsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import CVPagePreview from './preview-templates/CVPagePreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'
import PhDPagePreview from './preview-templates/PhDPagePreview'
import TeachingPagePreview from './preview-templates/TeachingPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('publications', PublicationsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('cv', CVPagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('my-phd-project', PhDPagePreview)
CMS.registerPreviewTemplate('teaching', TeachingPagePreview)
