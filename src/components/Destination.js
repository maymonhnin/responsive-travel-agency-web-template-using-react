import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";

import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p> Tours give you the opportunity to see a lot, within a time frame.</p>
        
            <DestinationData
            className="first-des" 
            heading="Campaign Trip"
            text="Esse mollit exercitation commodo elit deserunt ut ipsum veniam nisi sunt do id. Occaecat ut laboris aute laborum fugiat veniam occaecat esse consequat. Proident nisi irure nisi ipsum proident eu. Culpa anim cillum fugiat veniam labore non in ea anim ullamco elit non nulla commodo. Ipsum nostrud nostrud nisi labore incididunt anim commodo ex anim eu do consequat enim. Aute fugiat et aute exercitation pariatur aute amet Lorem sit laborum Lorem magna. Qui nulla dolore magna ad deserunt in nisi fugiat consequat ex magna elit aute."
            img1={Mountain1}
            img2={Mountain2}
            />
            
            <DestinationData 
            className="first-des-reverse"
            heading="Solo Trip"
            text="Esse mollit exercitation commodo elit deserunt ut ipsum veniam nisi sunt do id. Occaecat ut laboris aute laborum fugiat veniam occaecat esse consequat. Proident nisi irure nisi ipsum proident eu. Culpa anim cillum fugiat veniam labore non in ea anim ullamco elit non nulla commodo. Ipsum nostrud nostrud nisi labore incididunt anim commodo ex anim eu do consequat enim. Aute fugiat et aute exercitation pariatur aute amet Lorem sit laborum Lorem magna. Qui nulla dolore magna ad deserunt in nisi fugiat consequat ex magna elit aute."
            img1={Mountain3}
            img2={Mountain4}
            />
        </div>
    )
}

export default Destination;