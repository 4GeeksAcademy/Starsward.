import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.personajesIndividuales(params.theid)
	}, [])
	return (
		<div className="container">
			<div class="card mb-3" style={{maxWidth: "540px"}}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} class="img-fluid rounded-start" alt="..."/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title"> {store.personaje.name} </h5>
							<p class="card-text"> height: {store.personaje.height} </p>
							<p class="card-text"> hair_color: {store.personaje.hair_color} </p>
							<p class="card-text"> skin_color: {store.personaje.skin_color} </p>
							<p class="card-text"> eye_color: {store.personaje.eye_color} </p>
							<p class="card-text"> birth_year: {store.personaje.birth_year} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
