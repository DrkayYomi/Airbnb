// import katie from "./image/katie.png";
// import Star from "./image/Star.png";
import Contact from "./Contact";
import katie from "./image/katie.png";
import img from "./image/mountain-bike.png"
import dele from "./image/wedp.png";
import star from "./image/Star.png";
import cam from "./image/glasses.avif";
import Bale from "./Bale";
import beautiful from "./image/beautiful.avif";
import boat from "./image/boat.avif";
import carfine from "./image/carfine.avif";
import fineboi from "./image/fineboi.avif";


export default function Card() {
  return(
    <div className="Card">
              
                  <div className="Contactcomp">
                      <Contact 
                            img= {katie}
                            Star= {star}
                            rating="5.0"
                            country="USA"
                            lesson="Life lessons with Katie Zaferes"
                            price="From $136"

                      />
                      <Contact
                            img= {dele}
                            Star= {star}
                            rating="4.0"
                            country="Nigeria"
                            lesson="Fastest runner in the world"
                            price="From $172"
                      />
                      <Contact
                            img= {img}
                            Star= {star}
                            rating="7.0"
                            country="United Kingdom"
                            lesson="Life na the favour of God the help"
                            price="From $72"
                      />
                      <Contact
                            img= {cam}
                            Star= {star}
                            rating="5.5"
                            country="Cameroun"
                            lesson="Africa Cup of Nations"
                            price="From $36"
                      />
              
                  </div>

                 
                
                  <div className="Balecomp">
                      <Bale
                            img= {beautiful}
                            Star= {star}
                            rating="5.0"
                            country="USA"
                            lesson="Life lessons with Katie Zaferes"
                            price="From $136"
                      />
                      <Bale
                            img= {boat}
                            Star= {star}
                            rating="5.0"
                            country="USA"
                            lesson="Life lessons with Katie Zaferes"
                            price="From $136"
                      />
                      <Bale
                            img= {carfine}
                            Star= {star}
                            rating="4.2"
                            country="Nigeria"
                            lesson="Tell me something"
                            price="From $1950"
                      />
                      <Bale
                            img= {fineboi}
                            Star= {star}
                            rating="2.2"
                            country="United Kingdom"
                            lesson="Naira is depreciating"
                            price="From $1400"
                      />
                  </div>
              
    </div>
  )
}