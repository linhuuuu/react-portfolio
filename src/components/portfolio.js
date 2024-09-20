import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cards = (props) => {
  return (
    <div className="col-4 center-div">
      <div className="card box-shadow" id="button">
        <img className="card-img-top" src={props.img} alt={props.desc}></img>
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <div className='card-button center-div'><button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target={props.modal}>Read More</button></div>
        </div>
      </div>
    </div>
  )
}

const Modal = (props) => {
  return (
<div className="modal fade" id={props.modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
      </div>
      <img className="card-img-top" src={props.img} alt={props.desc}></img>
      <div className="modal-body">
      {props.desc}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> 
  )
}

const Portfolio = () => {
  return (
    // CARDS
    <div>
      <div className="row center-div card-container" id="portfolio">
        <Cards
          img={"/Rumplestiltskin.png"}
          title="Rumplestiltskin"
          desc="Early European tales of deception, royalty, feudalism and betrayal."
          modal="#modal1"
        ></Cards>

        <Cards
          img={"/CoinCrisis_TitleScreen.png"}
          title="Coin Crisis"
          desc="The key to a good relationship is to have a enough money for yourself and the self that wants."
          modal="#modal2"
        ></Cards>

        <Cards
          img={"/treasurebox.png"}
          title="Serindipity"
          desc="A treasure trove of memories kept safely in the box."
          modal="#modal3"
        ></Cards>
      </div>

      <Modal
        title="Rumplestiltskin"
        img={"/Kingdom.png"}
        modal="modal1"
        desc=" In partial fulfillment of the requirements of Algocom, I used a children's tale to teach about algorithms. Lovingly crafted, this animation paints a tale inspired by children's books and animations."
      ></Modal>

      <Modal
        title="Coin Crisis"
        img={"/coin.png"}
        modal="modal2"
        desc="In partial fulfillment of the requirements of Software Engineering 2, Coin Crisis is a video game proposal from Team Limbus. The game aims to educate people about healthy financial decisions. I took part in creating visuals and user interfaces."
      ></Modal>

      <Modal
        title="Serindipity"
        img={"/mirror.png"}
        modal="modal3"
        desc="A roblox game that simulates what it feels like to lose something precious but want for something more. Given as a gift to someone."
      ></Modal>
    </div>

  )
}
export default Portfolio
