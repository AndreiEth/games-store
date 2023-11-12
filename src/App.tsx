import "./app.scss";
import { Route, Routes, } from "react-router-dom";
import Header from "./components/header/Header";
import Aboutus from "./pages/aboutus/Aboutus";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import GameScreen from "./pages/gameScreen/GameScreen";
import { GAME__CARDS } from "./utils/conts";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/'
					element={<Home cards={GAME__CARDS} />}></Route>
				<Route path='/about-us'
					element={<Aboutus />}></Route>
				<Route path='/catalog'
					element={<Catalog cards={GAME__CARDS} />}></Route>
				<Route path='/game'>
					<Route path=':id' element={<GameScreen />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
