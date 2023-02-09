import Footer from './components/Footer';
import Card from './components/card';
import Form from './components/fomulaire';
import Nav from './components/Nav';
import Header from './components/Header';
function App() {
  return (
    <div>
    <Nav />
    <Header />
    <main>
      <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
      <span></span>
      <Form/>
    </main>
    <Footer />
    </div>
  );
}

export default App;
