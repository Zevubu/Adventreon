import React from "react";
import { BigBlock} from "../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import ShowCatBox from '../CP_fillers/base_filler/shows_cat'

function Shows (){
      // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock>
            <div>
                <ShowCatBox Cat="music" Name="Music"/>
            </div>
            <div>
                <ShowCatBox Cat="performance" Name="Performance Art"/>
            </div>
            <div>
                <ShowCatBox Cat="visual" Name="Visual Art"/>
            </div>
            <div>
                <ShowCatBox Cat="life" Name="Life"/>
            </div>
            <div>
                <ShowCatBox Cat="spiritual" Name="Spiritual Respite"/> 
            </div>
        </BigBlock>
    )
}

export default Shows;