import React from "react";
import { BigBlock, BlueHeader, H2, HeaderItem} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState}

import StoryShows from './Fillers/StoryShow';
import MixShows from './Fillers/MixShow';
import PlayShows from './Fillers/PlayShow';
import VarShows from './Fillers/VarShow'
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
                <StoryShows />
            </div>
            <div>
                <PlayShows />
            </div>
            <div>
                <MixShows /> 
            </div>
            <div>
                <VarShows /> 
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