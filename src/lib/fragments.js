import { graphql } from "gatsby"

export const bannerImage = graphql`
  fragment bannerImage260 on File {
    childImageSharp {
      fluid(
        maxWidth: 260
        traceSVG: {
          turnPolicy: TURNPOLICY_LEFT
          turdSize: 42
          background: "#488286"
        }
        quality: 50
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage640 on File {
    childImageSharp {
      fluid(
        maxWidth: 640
        traceSVG: {
          turnPolicy: TURNPOLICY_LEFT
          turdSize: 42
          background: "#488286"
        }
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(
        maxWidth: 720
        traceSVG: {
          turnPolicy: TURNPOLICY_LEFT
          turdSize: 42
          background: "#488286"
        }
        quality: 75
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const postsDetails = graphql`
  fragment PostsDetails on Mdx {
    id
    fields {
      title
      description
      slug
      tags
      date
      banner {
        ...bannerImage260
      }
    }
  }
`
