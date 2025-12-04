import { useEffect, useState } from 'react'
import PresentInfo from "./PresentInfo"
import './present.css'

function PresentBox(props){

    const [PID, setPID] = useState("none")

    function updatePID(){
        if(PID == "none"){
            setPID("block")
        } else {
            setPID("none")
        }
    }

    let img = props.imgURL
    let imgs = props.images
    if(!img && !imgs){
        img = "https://via.placeholder.com/150";
        imgs = []
    }

    return(
        <>
            <div className="presentBox" onClick={updatePID}>
                <h1>{props.name}</h1>
                <div className='imageContainer'>
                    
                    <img src={img} alt={props.imgALT} />
                </div>
            </div>
            <PresentInfo presentInfoDisplay={PID} whereToFind={props.whereToFind} details={props.details} images={imgs} />
            <button className='PBoxButton' style={{display: PID}} onClick={updatePID}>X</button>
        </>
        
    )
}

export default PresentBox