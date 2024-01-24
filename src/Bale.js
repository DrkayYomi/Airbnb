

export default function Contact(props){
  return(
    <div className="Bale-contents">
        <img className="bale-img" src={props.img} alt="katie-img"></img>
        <div className="star-text">
                      <img className="star-img" src={props.Star} alt="Star"></img>
                      <span className="Bale-rati"> {props.rating} </span>
                      <span> (6) </span>
                      <span className="Bale-coun"> {props.country} </span>
        </div>
                    
                      <div>
                        <p> {props.lesson} </p>
                        <p> <b> {props.price} </b> / person </p>
                      </div>
    </div>
  )
}