import React from "react";
import { BigBlock} from "../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import MuseShows from '../ShowBodies/MuseShow'
import EnterShows from '../ShowBodies/EnterShow'
import LifeShows from '../ShowBodies/LifeShow'
import ReligShows from '../ShowBodies/SpShow'

function Shows (){
      // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock>
            <div>
                <EnterShows />
            </div>
            <div>
                <MuseShows />
            </div>
            <div>
                <LifeShows />
            </div>
            <div>
                <ReligShows /> 
            </div>
        </BigBlock>
    )
}

export default Shows;