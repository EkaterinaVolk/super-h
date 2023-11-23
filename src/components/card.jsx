import '../App.css';
import React from 'react'

function Card(props) {
  return (
      <div className="card">
          <div className="card-body">
              <img className="hero-img" src={props.url} alt="hero"/>
              <h4 className="card-title">{props.name}</h4>
          </div>
          <div className="card-footer">
          <p className="card-text">{props.universe}</p>
          <p className="card-text">{props.alterego}</p>
          <p className="card-text">{props.occupation}</p>
          <p className="card-text">{props.superpowers}</p>
          </div>
      </div>
  );
}

// function Card(props) {
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <img src={props.imgLink} alt={props.title}/>
//                 <h4 className="card-title">{props.title}</h4>
//                 <p className="card-text">{props.description}</p>
//             </div>
//             <div className="card-footer">
//                 <span className="card-price">${props.price}</span>
//                 <button className="card-add">Заказать</button>
//             </div>
//         </div>
//     );
// }

// class Card extends React.Component {
//     render() {
// 				//здесь мы берем конкретные свойства, которые будут задаваться 
// 				//при вызове этого компонента
// 				const {title, price, description, imgLink} = this.props;
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     <img src={imgLink} alt={title}/>
//                     <h4 className="card-title">{title}</h4>
//                     <p className="card-text">{description}</p>
//                 </div>
//                 <div className="card-footer">
//                     <span className="card-price">${price}</span>
//                     <button className="card-add">Заказать</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default Card;