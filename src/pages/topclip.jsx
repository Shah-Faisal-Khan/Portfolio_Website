import React from "react";

const TopClip=({ onClick })=>{
    return(
        <div className="clipback" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="imgbox">
                <img src={require('../images/Screenshot_2024-07-18_000141-removebg-preview.png')} alt="" />
            </div>
        </div>
    )
}

export default TopClip;