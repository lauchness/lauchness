/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import SchemaOrg from './schema-org'
import config from "../../../config/website"
import defaultMetaImage from "../../images/metaImage.png"

const SEO = ({
  siteMetadata: seo,
  postData,
  metaImage,
  isBlogPost,
  title = postData.title || config.siteTitle,
  description = postData.plainTextDescription ||
    postData.description ||
    seo.description,
  image = `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = postData.slug
    ? `${seo.canonicalUrl}${postData.slug}`
    : seo.canonicalUrl,
  datePublished = isBlogPost ? postData.date : false,
}) => {
  const seoOrganization = {
    ...seo.organization,
    logo: `${seo.canonicalUrl}${metaImage}`
  }

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seoOrganization}
        defaultTitle={seo.title}
      />
    </>
  )
}

const SEOWithQuery = props => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          author {
            name
          }
          organization {
            name
            url
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  return <SEO siteMetadata={siteMetadata} {...props} />
}

SEOWithQuery.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string
  }),
  metaImage: PropTypes.string,
}

SEOWithQuery.defaultProps = {
  isBlogPost: false,
  postData: {},
  metaImage: null,
}

export default SEOWithQuery
