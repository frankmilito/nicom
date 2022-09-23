# Api endpoints

## Products

- Products list

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products`

- Product by id

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products/:productId`


### Searching

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products?search=<query string>`

### Sorting

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products?sortBy=<sorting field>&order=<asc|desc>`

### Pagination

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products?page=<page number>&limit=<limit>`

### Examples

- First 10 products sorted by title ascending

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products?sortBy=title&order=asc&page=1&limit=10`

- Search by title 'shirt'

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products?title=shirt`

## Prices

`https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products/:productId/prices`
