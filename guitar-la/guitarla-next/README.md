# Next.js

## What is?

- Is a framework for react to create apps and sites.
- Has many util features to make apps with great performance, SEO and easy to configure.
- It allows to run javascript code in the server as well the client side.
- Supports server side rendering (SSR) and static site generation (SSG).

## Advantages

- Is doesn't requires any configuration.
- Great performance and SEO optimization.
- Routing included.
- Build it functions to get API's datas as getServerSideProps and getStaticProps.

## How to get data

- getServerSideProps - The data is obtained in each request (Server Side Rendering - SSR).
- getStaticProps - Obtain the data when the build is created (Static Side Generation - SSG).
- getStaticPaths - Get the pages list that will be created when the build is created (Static Side Generation).

## When to use serverSideProps or StaticProps?
- Use serverSideProps when the info is in continuos change, or when the page is updated in a short time.
- Use staticProps when the info doesn't change in each request. 


