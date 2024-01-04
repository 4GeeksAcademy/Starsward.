import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div>
				<img src="https://w7.pngwing.com/pngs/723/1016/png-transparent-star-wars-logo-star-wars-text-logo-silhouette.png" style={{ width: "100px" }} /> </div>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"
					href="#" role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false" >
					Favoritos </a>
					<ul className="dropdown=menu"> 
					{store.favoritos.map((items,id)=>(
						<li key={id}> {items} </li>
					))}
					</ul>
			</div>
		</nav>
	);
};
