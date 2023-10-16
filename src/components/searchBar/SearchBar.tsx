import "./searchBar.scss"
import { useState } from 'react'

// interface SearchBar {
// 	value: string;
// }

export default function SearchBar() {

	return (
		<div className="search-bar">
			<div className="search-bar__container">
				<input type="text" className="search-bar__input" placeholder="Search ..."/>
				<h3>Press ENTER</h3>
			</div>
			<button className="search-bar__button"></button>
		</div>
	)
}
