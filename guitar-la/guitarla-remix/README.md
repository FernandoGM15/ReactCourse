# Remix

## Features

- Remix is an alternative to Next.js to create websites and applications in React, it can be executed in client or server.
- Is a compiler, request manager, framework for the server and framework for the client
- Created by the React Router DOM developers

## Advantages

- No configuration.
- Great performance and SEO optimization.
- Included Routing.
- Http request handling.
- The code still being React: components, hooks, etc.

## Root file (root.tsx)

The root file is the core element of the whole application, in this file we can define the page elements, layouts, styles and SEO tags that we'll use globally.

## Routes folder

### Basic routes

Remix keeps all the application routes inside the routes folder, the named files are referenced by the url.

```shell
  routes
    |- index.tsx ===> /index
    |- about-us.tsx ===> /about-us
```

### Dot Delimiters

Adding a . to a route filename will create a / in the URL.

```shell
  routes
    |- admin.create ===> /admin/create
    |- admin.update ===> /admin/update
    |- admin.list ===> /admin/list
```

### Dynamic segments

Usually your URLs aren't static but data-driven. Dynamic segments allow you to match segments of the URL and use that value in your code. You create them with the $ prefix.

```shell
  routes
    |- user.$id ===> /user/:id
    |- user.$name ===> /user/:name
```

### Context API

- Added on React 16.3.
- Is possible to send states or function from the main component to children, without pass for each component.
- Has it own hook 'useContext'.
- It's possible to update the state from the child (or execute a function that update it).
- Recommended to use it if you'll create libraries.
