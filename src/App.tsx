import "./app.scss";
import { Route, Routes, } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/'
					element={<></>}></Route>
				<Route path='/about-us'
					element={<></>}></Route>
				<Route path='/catalog'
					element={<></>}></Route>
			</Routes>
		</div>
	)
}

export default App
