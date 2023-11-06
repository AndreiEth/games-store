import "./app.scss";
import { Route, Routes, } from "react-router-dom";
import Header from "./components/header/Header";
import Aboutus from "./pages/aboutus/Aboutus";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/'
					element={<Home />}></Route>
				<Route path='/about-us'
					element={<Aboutus />}></Route>
				<Route path='/catalog'
					element={<Catalog />}></Route>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
