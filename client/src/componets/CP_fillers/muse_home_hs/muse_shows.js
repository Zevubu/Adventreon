import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import LiveShows from './Fillers/LiveShow';
import AcouShows from './Fillers/acousticShow';
import EdmShows from './Fillers/EdmShow';
import EduShows from './Fillers/EduShow';
import VlogShows from './Fillers/VlogShow';
import DjShows from './Fillers/DjShow'

function Shows (){
    // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock>
            <div>
                <LiveShows/>
            </div>
            <div>
                <AcouShows/>
            </div>
            <div>
                <EdmShows /> 
            </div>
            <div>
                <DjShows />
            </div>
            <div>
                <EduShows /> 
            </div>
            <div>
                <VlogShows /> 
            </div>
        </BigBlock>
    )
}

export default Shows;