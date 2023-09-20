# Context API

## What is?

- It's a way to handle the global state in an app.
- Available from V16.3.
- Availability to obtain a state defined in the main component from any child component.
- The state can be updated from a child component.
- Recommended to library creation.

## Example

- Is necessary to pass the state as prop from the main component to the grandchild through the child.
  <App/> -> <Shop/> -> <Products/>

- Using context can pass directly the state from parent to grandchild component.
  <App/> <Shop/> <Products/>
   ^                  ^
   |------------------|

# Extra

## useCallback

This hook allows to memoize a function to prevent it's creation on each component rerender, can be useful to increase the application performance.

## useMemo

This hook a difference to useCallback allows to memoize a calculated value.
