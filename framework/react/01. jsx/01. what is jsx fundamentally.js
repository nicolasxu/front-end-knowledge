// Fundamentally, JSX just provides syntactic sugar for the 
React.createElement(component, props, ...children) 
// function. The JSX code:

<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

compiles into:

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
