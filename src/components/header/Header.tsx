import Logo from "../common/logo/Logo"
import Navbar from "../common/navbar/Navbar"
import SearchBar from "../common/searchBar/SearchBar"
import "./header.scss"

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<Logo />
				<SearchBar  />
				<button className="header__burger">
					<div></div>
					<div></div>
					<div></div>
				</button>
			</div>
			<Navbar/>
		</header>
	)
}
