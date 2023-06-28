# Dates Project

## JSX (Javascript Syntax Extension)

- It's an language's extension developed by Meta for React.
- It's a template language that shows HTML but it has all the functions of JavaScript.
- Once compiled, the JSX is transformed into JS files.
- It mandatory to close the tags.
- The tags needs to finish with "/>".

## React Events

- The way that React handles events is similar to JavaScript vanilla does.
- The events are camel case.

## Properties

- Is a way to reuse that variables, state and functions in other components.
- It are passed from the parent to the child

## React Hooks

The hooks are available from the 16.8 version, previously it was necessary to make classes to
create and modify the state, with the hooks this isn't necessary anymore.
It is possible to create your own hooks, to separate the code in reusable functions.

## Hooks Rules

- The hooks should be placed before the return statement.
- It shouldn't be placed inside of conditionals statements.

### Basics:

- UseState
- UseEffect
- useContext

### Additional:

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## State (useState)

It's a variable with relevant info, it provides us to know which is the current state of our application.
Sometimes the state belongs to a specific component or it can be shared between multiple components

## Effect(useEffect)

It executes when the component is ready to render or when a dependency changes.
Normally is used when a API call is needed and when is necessary to update the component when a dependency changes.

[Click me to open the project](https://649c7ce219333a0b084d1af2--storied-palmier-7482f6.netlify.app/)
