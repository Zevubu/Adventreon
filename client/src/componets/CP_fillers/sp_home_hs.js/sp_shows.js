import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import GuidShows from './Fillers/guideShow';
import SpellShows from './Fillers/spellShow';
import ReadShows from './Fillers/readingShow';
import EduShows from './Fillers/EduShow';
import VlogShows from './Fillers/VlogShow';



function Shows (){
    // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock>
            <div>
                <GuidShows/>
            </div>
            <div>
                <SpellShows />
            </div>
            <div>
                <ReadShows/> 
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