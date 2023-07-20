import './App.css';
import Header from './components/header/Header.component';
import Banner from './components/banner/Banner.component';
import Footer from './components/footer/Footer.component';
import HomeScreen from './components/homescreen/HomeScreen.component';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
