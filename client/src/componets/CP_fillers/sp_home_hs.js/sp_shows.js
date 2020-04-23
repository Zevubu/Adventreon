import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import EnterShows from './Fillers/guideShow';
import CounsShows from './Fillers/spellShow';
import ReligShows from './Fillers/readingShow';
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
                <EnterShows />
            </div>
            <div>
                <CounsShows />
            </div>
            <div>
                <ReligShows /> 
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