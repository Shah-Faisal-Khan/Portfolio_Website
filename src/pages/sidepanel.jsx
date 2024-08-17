import React from "react";

const Sidepanel=()=>{
    return(
        <div className="sidepanel">
            {/* <h4>Contact</h4> */}
            <div><img src={require('../images/4x/Asset 91@4x.png')} alt="" /><h3>Github</h3></div>
            <div><img src={require('../images/4x/Asset 95@4x.png')} alt="" /><h3>LinkedIn</h3></div>
            <div><img src={require('../images/4x/Asset 94@4x.png')} alt="" /><h3>Instagram</h3></div>
            {/* <div></div> */}
        </div>
    )
}

export default Sidepanel;