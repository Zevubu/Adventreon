import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
import ShowSubCatBox from '../base_filler/shows_subcat'

function Shows (){
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