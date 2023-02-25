import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
    const[vote, setVote]= useState(
        [
            {
                name: "Daffy",
                id: 1,
                imageUrl:require("./image/daffy.jpg"),
                votes: 12,
              
              },
              {
                name: "Lola",
                id: 2,
                imageUrl:require("./image/lola.jpg"),
                votes: 8,
              
              },
              {
                name: "Daffy",
                id: 3,
                imageUrl: require("./image/daffy.jpg"),
                votes: 7,
              
              },
              {
                name: "Lola",
                id: 4,
                imageUrl: require("./image/lola.jpg"),
                votes: 4,
               
              }
            ]
    )

const classement = (idVote) => {

    const voteClass = [...vote].map((electeur) =>{
        if(idVote === electeur.id){ 
            electeur.votes++
        }
            return electeur;
    })
    console.log(idVote) 
   const sortVote = voteClass.sort((a,b) => {
        return b.votes - a.votes
    });
    setVote(sortVote)

};
  return( 
    vote.map((elt)=> (
      <div className="card mb-3 carte " key={elt.id}>
    <div className="row g-0 ">
      <div className="col-md-4">
        <img src={elt.imageUrl} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{elt.name}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text d-flex"><span>{elt.votes}</span>
            <button  className="plus mx-auto" onClick={() => classement(elt.id)}>+</button></p>
        </div>
      </div>
    </div>
  </div>
  //     <div className="carte" key={elt.id}>
  //     <div>
  //         <img className="image" src={elt.imageUrl}/> 
  //     </div>
  //     <p>{elt.name}</p>
  //     <div className="detail">
  //         <p>{elt.votes}</p>
  //         <button  className="plus" onClick={() => classement(elt.id) }>+</button>
  //     </div>
  // </div>
  )))
}

export default App;