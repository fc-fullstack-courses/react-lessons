function Greeting(props) {
  const { name, id } = props;
  // name = 'test';
  return (
    <p>
      Hello, {name}-{id}
    </p>
  );
}

// class Greeting2 extends React.Component {
//   render() {
//     const { name, id } = this.props;
//     return (
//       <p>
//         Hello, {name}-{id}
//       </p>
//     );
//   }
// }

export default Greeting;
