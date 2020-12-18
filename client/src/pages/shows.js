import React from "react";
import {DivWBorder, BigBlock} from "../styles/homeStyle";
import EnterShows from '../componets/ShowBodies/EnterShow';
import CounsShows from '../componets/ShowBodies/LifeShow';
import SpShows from '../componets/ShowBodies/SpShow';

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
                    <SpShows /> 
                </div>
            </DivWBorder>
        </BigBlock>
    )
}
export default Shows;