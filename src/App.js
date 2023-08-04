import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home.page';

import Footer from './components/footer/Footer.component';
import AppPage from './pages/App.page';
import DetailAppPage from './pages/DetailApp.page';
// import DetailWebPage from './pages/DetailWeb.page';
import WebsitePage from './pages/Website.page';
import MyCVPage from './pages/MyCV.page';
import ProductPage from './pages/Product.page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />}></Route>

            <Route path="/app" element={<AppPage />}></Route>
            <Route path="/app/:key" element={<DetailAppPage />}></Route>

            <Route path="/website" element={<WebsitePage />}></Route>
            {/* <Route path="/website/:key" element={<DetailWebPage />}></Route> */}
            <Route path="/my-cv" element={<MyCVPage />}></Route>
            <Route path="/my-products" element={<ProductPage />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
