# Custom Relationship Management

## Description

    Obtains the clients info and the tracking with them as well.

## Topics

### Routing

- With a routing library the application can have different URLs and show different components, as well as restrict the access to certain routes.
- Always is better to use the router in big applications.

### Router libraries

- React Router.
- React location
- Next.js, Remix Run, Gatsby, Astro counting with its own routing system.

### React router dom

- Is a library to create routed applications.
- If we have different pages, we can have a better organization.

### Loaders

It are a used to obtain data at the mounting of component, usually to get the API data.

### Actions

Use Actions to process the data input in a form

### REST API

- REST = Representational State Transfer.
- Can be deigned in any language.
- It must respond an Http request: GET, POST, PUT, PATCH, DELETE.

#### Request types

- GET - To obtain information.
- POST - To send data to the server / create.
- PUT/PATCH - Update
- DELETE - Delete

#### Endpoint

- Urls that allows to make some CRUD operations
- List all clients GET --> /clients
- Obtain just one client GET --> /clients/{id}
- Create new client POST --> /clients
- Edit the client info PUT --> /clients/{id}
- Delete client DELETE --> /clients/{id}