import React from 'react'
import withProps from './hocs/withProps'
import withHandlers from './hocs/withHandlers'

// // FUNCTION
// function sayHi(name) {
//   return 'Hello ' + name
// }
// console.log(sayHi('John')) // Hello John

// // HIGHER-ORDER FUNCTION
// function withExclamationMarks(fn) {
//   return (...args) => fn(...args) + '!!!'
// }
// const yellHi = withExclamationMarks(sayHi)
// console.log(yellHi('Frank')) // Hello Frank!!!

// COMPONENT
function SayHi(props) {
  return <div>Hello {props.name}</div>
}

// HIGHER-ORDER COMPONENT
function withExclamationMarksHOC(Component) {
  return props => <Component name={props.name + '!!!'} />
}

// COMPONENT GENERATED FROM COMPONENT x HOC
const YellHi = withExclamationMarksHOC(SayHi)

// ANOTHER COMPONENT
const SimpleDiv = ({ children = 'A simple div', ...otherprops }) => (
  <div {...otherprops}>{children}</div>
)

// ANOTHER COMPONENT GENERATED FROM COMPONENT x HOC
const ComplexDiv = withProps({
  style: { backgroundColor: 'red' },
  children: 'A simple div wrapped in a HOC'
})(SimpleDiv)

// ANOTHER COMPONENT
const Button = props => <button {...props} />

// ANOTHER COMPONENT GENERATED FROM COMPONENT x HOC
const ButtonWithHandlers = withHandlers({
  onClick: props => () =>
    window.alert(`clicked, my children is "${props.children}"`)
})(Button)

const App = () => {
  return (
    <div className="app">
      <SayHi name="John" />
      <YellHi name="Jean-Pierre" />
      <SimpleDiv />
      <ComplexDiv />
      <Button
        onClick={() => window.alert('clicked, my children is "Click me"')}
      >
        Click me
      </Button>
      <ButtonWithHandlers>Click me too</ButtonWithHandlers>
    </div>
  )
}

export default App
