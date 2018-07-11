import React from 'react';
import ReactDOM from 'react-dom';

// the simplest way to write a stateless functional component:
const SimpleGreeting = props => <h2>Hello {props.name}!</h2>

// we can avoid having to write `props.` every time by destructuring:
const BetterGreeting = props => {
  const { firstName, lastName } = props;

  return <h3>Hello, {firstName} {lastName}!</h3>
}

// or if we're feeling especially cool, we can do it directly inside the function parameters:
const FinalGreeting = ({ firstName: f, lastName: l }) => <h4>Yo, {f} {l}!</h4>

// just a boring old object variable we'll use below
const name = { firstName: 'Susan', lastName: 'Jones' }

// now, all together:
const App = () =>
  <div>
    <h1>Hello World!</h1>

    <SimpleGreeting name={'Bob'}  />
    {/*             ^^^^^^^^^^^^              
            Here we have `props` as attributes.
            Each attribute is really just a normal object key in the end!   
            JSX is basically just a HTML-like syntax for calling Javascript functions.
            These functions get handed an object called `props` as their only argument.
            The above code has the same effect as the one below:
        */}

    {SimpleGreeting({ name: 'Mary' })}
    {/*               ^^^^^^^^^^^^^^
            The function gets a `props` object as it's argument.
        */}

    <BetterGreeting firstName={'Joe'} lastName={'Smith'} />

    {/* The following is experimental syntax! You need Babel to transpile this... */}
    <FinalGreeting {...name} />

    {/* ...into this: */}
    <FinalGreeting firstName={name.firstName} lastName={name.lastName} />

    {/* The above is the same as this: */}
    {FinalGreeting(name)}
  </div>

ReactDOM.render(<App />, document.getElementById('root'));

/* this creates the following output:

<div>
    <h1>Hello World!</h1>
    <h2>Hello Bob!</h2>
    <h2>Hello Mary!</h2>
    <h3>Hello, Joe Smith!</h3>
    <h4>Yo, Susan Jones!</h4>
    <h4>Yo, Susan Jones!</h4>
    <h4>Yo, Susan Jones!</h4>
</div>

*/