import React from "react";

const Carte = (props) => {
    return(<div className="card mb-3" style="max-width: 540px;">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="{props.imageUrl}" className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><p>{props.votes}</p>
            <button  className="plus">+</button></p>
        </div>
      </div>
    </div>
  </div>)

   
}

export default Carte;