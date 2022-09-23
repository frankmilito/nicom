import { useQuery, gql } from '@apollo/client'


const GET_PRODUCTS = gql`
  query GetProductList($page:Int,$searchQuery:String,$sortCriteria:String,$order:String) {
    getProducts(page:$page,searchQuery:$searchQuery,sortCriteria:$sortCriteria,order:$order) {
      id
      title
      description
      image
      release_date
      material
      color
      price{
        price
      }
    }
  }
`
export const useProductList = (page: number, searchQuery: string, sortCriteria: string, order: string) => {
  const { error, data, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      page, searchQuery, sortCriteria, order
    }
  })


  return {
    error, data, loading
  }
}