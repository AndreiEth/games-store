import { Link } from "react-router-dom"
import "./navbar.scss"

export default function Navbar() {
	return (
		<nav className="nav">
			<ul className="nav__links" >
				<li className='nav__item'>
					<Link
						to='/'
					>
						HOME
					</Link>
				</li>
				<li
					className='nav__item'
				>
					<Link
						to='/about-us'
					
					>
						ABOUT US
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						to='/catalog'
					>
						CATALOG
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						to='#' id="off"
					>
						MEMBERSHIPS
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						to='#' id="off"
					>
						UPCOMING
					</Link>
				</li>
			</ul>
		</nav>
	)
}
