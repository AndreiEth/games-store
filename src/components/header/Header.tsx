import Logo from "../logo/Logo"
import Navbar from "../navbar/Navbar"
import SearchBar from "../searchBar/SearchBar"
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
