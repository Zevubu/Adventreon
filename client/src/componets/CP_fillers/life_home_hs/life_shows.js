import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState}



import CounsShows from './Fillers/counsShow';
import CookShows from './Fillers/CookShow';
import LifeHackShows from './Fillers/LifeHackShow';
import VarietyShows from './Fillers/VarShow'
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
                <CounsShows />
            </div>
            <div>
                <CookShows />
            </div>
            <div>
                <LifeHackShows/> 
            </div>
            <div>
                <VarietyShows/> 
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