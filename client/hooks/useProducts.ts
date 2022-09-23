import { gql, useQuery } from '@apollo/client'

const GET_PRODUCTS = gql`
query GetSingleProduct($id:Int){
    getSingleProduct(id:$id){
    id
    title
    description
    material
    image
    price{
        price
    }
}
}
`

export const useProduct = (id: number) => {
    const { data, loading, error } = useQuery(GET_PRODUCTS, { variables: { id } })
    return {
        loading, error, data
    }
}