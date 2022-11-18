import Greeting from "../../components/Greeting";

function HomePage(props) {
  console.log(props)
  return (
    <main>
      <h1>Home page</h1>
      <Greeting />
    </main>
  );
}

export default HomePage;
