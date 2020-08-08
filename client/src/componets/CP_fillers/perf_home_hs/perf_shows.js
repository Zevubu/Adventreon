import React from "react";
import { BigBlock, BlueHeader, H2, HeaderItem} from "../../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState}

import ShowSubCatBox from '../base_filler/shows_subcat'

function Shows (){
    // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <BigBlock> 
            <div>
                <ShowSubCatBox  Cat="performance" SubCat="story" Name="Story"/>
            </div>
            <div>
                <ShowSubCatBox Cat="performance" SubCat="play" Name="Play"/>
            </div>
            <div>
                <ShowSubCatBox Cat="performance" SubCat="mixed" Name="Mixed Media"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="performance" SubCat="variety" Name="Variety"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="performance" SubCat="educate" Name="Educational"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="performance" SubCat="blog" Name="Personal Vlogs"/> 
            </div>
        </BigBlock>
    )
}

export default Shows;