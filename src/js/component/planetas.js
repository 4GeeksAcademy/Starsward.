import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const Planetas = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPlanetas()
    }, [])
    return (
        <div>
            <h1> Planetas  </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planetas.map((items,id)=> (

                   
                    <div key={id} className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        {id==0?
                        <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" alt="..." />:

                        <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id+1)+".jpg"} className="card-img-top" alt="..." />
                    }
                        <div className="card-body">
                            <h5 className="card-title">{items.name}</h5>
                            <p className="card-text">  climate: {items.climate} </p>
                            <p className="card-text">  gravity: {items.gravity} </p>
                            <Link to={"/singleplanets/"+(id+1)} className="btn btn-primary"> more info </Link>
                            <div onClick={()=>actions.agregarFavoritos(items.name)} className="btn btn-outline-primary float-end"> ❤️ </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>

    );
};
