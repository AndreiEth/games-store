import { Link } from "react-router-dom"
import "./footer.scss"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__div1">
				<Link to="/" className="footer__logo">
					3 <span>GAMES</span> STORE
				</Link>
				<p className="footer__logo-text1">BEST GAMES SELLER </p>
				<p className="footer__logo-text2">3gs© All rights reserved</p>
			</div>

			<div className="footer__div2">
				<h2>3 games Store© 2023</h2>
				<ul>
					<li>Privacy</li>
					<li>Disclaimer</li>
					<li>Conditions</li>
				</ul>
			</div>

			<div className="footer__div3">
				<ul>
					<li>CATALOG</li>
					<li>HOME</li>
					<li>BLOG & NEWS</li>
				</ul>
			</div>

			<div className="footer__div4">
				<ul>
					<li>ABOUT US</li>
					<li>CONTACT US</li>
					<li>VACANCY</li>
					<li>Other</li>
				</ul>
			</div>
		</footer>
	)
}
