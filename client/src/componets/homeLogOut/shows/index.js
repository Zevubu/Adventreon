import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import MuseShows from './showBodies/MuseShow'
import PerfShows from './showBodies/PerfShow'
import VisShows from './showBodies/VisualShow'
import LifeShows from './showBodies/LifeShow'
import ReligShows from './showBodies/SpShow'

function Shows (){
      // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock>
            <div>
                <MuseShows />
            </div>
            <div>
                <PerfShows />
            </div>
            <div>
                <VisShows />
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