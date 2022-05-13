//  components

function Button() {
  return <button>Eu sou butao</button>;
}

function Footer() {
  return <footer>Footer</footer>;
}
function Header() {
  return <header>header</header>;
}

class NavBar extends React.Component {
  render() {
    return <div>eu sou a classe</div>;
  }
}

function App() {
  return (
    <div>
      <Header />
      Meu app
      <Button />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));
