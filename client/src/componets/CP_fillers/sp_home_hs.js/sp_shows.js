import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
import ShowSubCatBox from '../base_filler/shows_subcat'

function Shows (){
    return(
        <BigBlock>
            <div>
                <ShowSubCatBox Cat="spiritual" SubCat="guide" Name="Guidance"/>
            </div>
            <div>
                <ShowSubCatBox Cat="spiritual" SubCat="spells" Name="Spells"/>
            </div>
            <div>
                <ShowSubCatBox Cat="spiritual" SubCat="readings" Name="Readings"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="spiritual" SubCat="educate" Name="Educational"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="spiritual" SubCat="blog" Name="Personal Vlogs"/> 
            </div>
        </BigBlock>
    )
}

export default Shows;