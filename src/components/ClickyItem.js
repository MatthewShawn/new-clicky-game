import React from "react";




//import "./ClickyItem.css";
// import { url } from "inspector";

//
    // <div className={`mdc-layout-grid__cell--span-3--order-${Number(id)}`}>
 
//)



const ClickyItem = ({ id, name, image, handlePicked }) => {
     console.log (id,  name,  image);
    return(
        <section>
            <div
                className="card"
                key={id}
                data-id={id}
                name={name}
                style={{ backgroundImage: `url(${image})` }}
                onClick={handlePicked}
            >
            </div>
        </section>
    )
}

   // return (
    
  //  )
//}

export default ClickyItem;