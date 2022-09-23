##  FRONT END ASSESSMENT (A SIMPLE PRODUCT CATALOGUE)

This project implements two screens using React JS To view List of products and Single product details with routes

- /
- /product/:id

## Technologies

A list of technologies used within the project:
- React
- Typescript
- Graphql
- Apollo-Client
- React router dom

## How to Run the project

- git clone this repository
- yarn
- yarn start

# Introduction

Hey applicant!

👏 Congratulations you've taken the first hurdle! 
This code challenge means you've made a good impression and got us curious about your code style.

In this challenge we want you to demonstrate both client- and server-side (nodejs) skills.


# The task

We challenge you to create a simple products catalog using 2 endpoints (products and prices), described in [API.md](./API.md).

This catalog should be able to show to the user products and *their prices*.
Unfortunately, the API is designed really bad and the only possibility is to request product price separately for each product.
Making that many requests is too expensive for client, therefore we beleive we need a GraphQL layer, which would do this job.

We created the app sceleton to save you some time. Please follow the [GETTING_STARTED.md](./GETTING_STARTED.md) to get started.

**If you never worked with GraphQL or have no idea what it is, here is the link to [the official GraphQL website](https://graphql.org/)**


## Requirements

### Client 

Develop a client-side application that consists of 2 routes:

- Root (`/`), where

    - User can view products list requested from GraphQL endpoint

    - Each product has title, image and price

    - User can search products by title

    - User can sort products

    - *Bonus task*: Introduce pagination (e.g. 10 products per page)

- Detailed product page (`/product/:productId`), where:

    - User can view full list of product details


### Server

Develop a GraphQL layer, which satifies aforementioned client needs.


### Graphql schema

As a tip we provide an example graphql query:

```js
query {
  product {
    id
    title
    price
  }
}
```

but feel free to design the schema the way you like


# Side notes

Think about how to structure your application, document and test it.
Although you should not move away from the React/GraphQL stack – we highly encourage you to add whatever tools makes you more productive – at Native Instruments, we use CSS-in-JS, for example.
We are not providing designs, so feel free to unleash your inner artist, or just build the screens using a UI framework out there!


# How to send back the result

When you're done, please archive the directory and send it back to us. Please also remove all personal traces from the code.

Using git (keeping .git directory in this case) is highly appreciated. This way we could also evaluate the way you make your commits. 
If you decide to do so, please make the git user anonym. To do so you simply need to configure it in repository setup:

```sh
git config user.name 'Anonymous'
git config user.email '<>'
```


🍀 Good luck,
Web Development Team at Native Instruments.
