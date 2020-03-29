const path = require("path")
const { URL } = require("url")
const slugify = require("@sindresorhus/slugify")
const { createFilePath } = require("gatsby-source-filesystem")

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

function createBlogPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

const createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    fragment PostDetails on Mdx {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      fields {
        title
        slug
        description
        date
      }
    }
    query {
      devBlog: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            ...PostDetails
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  const { devBlog } = data

  createBlogPages({
    data: devBlog,
    actions,
  })
}

const onCreateNode = (...args) => {
  if (args[0].node.internal.type === `Mdx`) {
    onCreateMdxNode(...args)
  }
}

// eslint-disable-next-line complexity
function onCreateMdxNode({ node, getNode, actions }) {
  const parentNode = getNode(node.parent)
  const { createNodeField } = actions
  let slug =
    node.frontmatter.slug ||
    createFilePath({ node, getNode, basePath: `pages` })

  if (node.fileAbsolutePath.includes("content/blog/")) {
    slug = `/blog/${node.frontmatter.slug || slugify(parentNode.name)}`
  }

  createNodeField({
    name: "id",
    node,
    value: node.id,
  })

  createNodeField({
    name: "published",
    node,
    value: node.frontmatter.published,
  })

  createNodeField({
    name: "title",
    node,
    value: node.frontmatter.title,
  })

  createNodeField({
    name: "author",
    node,
    value: node.frontmatter.author || "Lauchlan Chisholm",
  })

  createNodeField({
    name: "description",
    node,
    value: node.frontmatter.description,
  })

  createNodeField({
    name: "slug",
    node,
    value: slug,
  })

  const productionUrl = new URL(process.env.ROOT_URL || "https://lauchness.com")
  productionUrl.pathname = slug

  createNodeField({
    name: "productionUrl",
    node,
    value: productionUrl.toString(),
  })

  createNodeField({
    name: "date",
    node,
    value: node.frontmatter.date ? node.frontmatter.date.split(" ")[0] : "",
  })

  createNodeField({
    name: "banner",
    node,
    value: node.frontmatter.banner,
  })

  createNodeField({
    name: "bannerCredit",
    node,
    value: node.frontmatter.bannerCredit,
  })

  createNodeField({
    name: "categories",
    node,
    value: node.frontmatter.categories || [],
  })

  createNodeField({
    name: "keywords",
    node,
    value: node.frontmatter.keywords || [],
  })
}

module.exports = {
  createPages,
  onCreateNode,
}
