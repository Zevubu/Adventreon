import React from "react";
import {DivWBorder, BigBlock} from "../styles/homeStyle";
import EnterShows from '../componets/ShowBodies/EnterShow';
import CounsShows from '../componets/ShowBodies/LifeShow';
import ReligShows from '../componets/ShowBodies/SpShow';

function Shows (){

    return(
        <BigBlock>

            <DivWBorder>
                <br/>
                <div>
                    <EnterShows />
                </div>
                <div>
                    <CounsShows />
                </div>
                <div>
                    <ReligShows /> 
                </div>
                
            </DivWBorder>
        </BigBlock>
    )
}
export default Shows;