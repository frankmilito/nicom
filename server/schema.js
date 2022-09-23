const axios = require("axios")
const { gql} = require("apollo-server-express")

// Construct a schema, using GraphQL schema language
 const typeDefs = gql`
  type price {
    id: String
    price: String
  }

  type Product {
    title: String!
    image: String!
    material: String!
    color: String!
    description: String!
    release_date: String!
    id: Int!
    price: price
  }
  type Query {
    getProducts(
      page: Int
      searchQuery: String
      sortCriteria: String
      order: String
    ): [Product!]!
    getSingleProduct(id: Int): Product
    price: price
  }
`


// The root provides a resolver function for each API endpoint
const base_url = "https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products"

 const resolvers = {
  Query: {
    getProducts: async (parent, args) => {
      const res = await axios.get(
        `${base_url}?page=${args.page}&limit=10&title=${args.searchQuery}&sortBy=${args.sortCriteria}&order=${args.order}`
      )
      return res.data.items
    },
    getSingleProduct: async (parent, args) => {
      const res = await axios.get(`${base_url}/${args.id}`)
      return res.data
    },
  },
  Product: {
    price: async (parent, arg, context) => {
      // Get the price for each product in the parent list
      const res = await axios
        .get(
          `${base_url}/${parent.id}/prices`
        )
        .then(res => {
          return res.data[0]
        })
        .catch(error => console.log(error))
      return res
    },
  },
}

module.exports={typeDefs,resolvers}