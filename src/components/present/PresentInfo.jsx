import './present.css'
import { useState } from 'react';

function PresentInfo(props){

    let images = props.images
    const [imageIndex, setImageIndex] = useState(0)
    const [image,setImage] = useState(images[0]);
    function changeImage(x) {
        if(images == null || images == ""){
            return;
        }
        if(imageIndex + x > images.length-1){
            setImageIndex(0)
            setImage(images[0])
        } else if(imageIndex + x < 0){
            setImageIndex(images.length-1)
            setImage(images[images.length -1])
        } else {
            setImageIndex(imageIndex + x);
            setImage(images[imageIndex+x])
        }
    }
    
    return(
        <div className="presentInfoBox" style={{display: props.presentInfoDisplay}} >
            
            <article>
                <h1>Onde encontrar?</h1>
                <p>{props.whereToFind}</p>
            </article>
            <article>
                <h1>Fotos:</h1>
                <div className="fotosBox">
                    <button onClick={(() => changeImage(-1))}>&lt;</button>
                    <div>
                        <img src={image} alt="fotos do item" />
                    </div>
                    <button onClick={(() => changeImage(1))}>&gt;</button>
                </div>
            </article>
            <article>
                <h1>Detalhes</h1>
                <p>{props.details}</p>
            </article>
        </div>
    );
}

export default PresentInfo