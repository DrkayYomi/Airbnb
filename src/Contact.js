// import katie from "./image/katie.png";
// import Star from "./image/Star.png";

export default function Contact(props){
  return(
    <div className="Card-contents">
                  <img className="card-img" src={props.img} alt="katie-img"></img>
                    <div className="star-text">
                      <img className="star-img" src={props.Star} alt="Star"></img>
                      <span> {props.rating} </span>
                      <span> (6) </span>
                      <span> {props.country} </span>
                    </div>
                    
                      <div>
                        <p> {props.lesson} </p>
                        <p> <b> {props.price} </b> / person </p>
                      </div>
                    
              </div>
  )
}