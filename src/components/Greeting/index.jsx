function Greeting(props) {
  const { name, id } = props;
  // v1
  // if (name) {
  //   return <p>Hello, {name}!</p>;
  // }
  // return <p>Hello, Guest!</p>;

  // v2
  // const text = name && (id || id === 0) ? name : 'Guest';
  // return <p>Hello, {text}!</p>;

  // v3
  // return <p>Hello, {name || "Placeholder"}!</p>;

  // v4
  // if(name) {
  //   return <GreetUser name={name} />
  // }
  // return <GreetGuest />
  return name ? <GreetUser name={name} /> : <GreetGuest />;
}

function GreetGuest(props) {
  return <p>Hello, Guest!</p>;
}

function GreetUser(props) {
  const { name } = props;
  return <p>Hello, {name}!</p>;
}

export default Greeting;
