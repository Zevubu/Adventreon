import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
import ShowSubCatBox from '../base_filler/shows_subcat'

function Shows (){
    return(
        <BigBlock>
            <div>
                <ShowSubCatBox Cat="music" SubCat="variety" Name="Variety"/>
            </div>
            <div>
                <ShowSubCatBox Cat="music" SubCat="acoustic" Name="Acoustic"/>
            </div>
            <div>
                <ShowSubCatBox Cat="music" SubCat="edm" Name="EDM"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="music" SubCat="dj" Name="Dj Sets"/>
            </div>
            <div>
                <ShowSubCatBox Cat="music" SubCat="educate" Name="Educational"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="music" SubCat="blog" Name="Personal Vlogs"/> 
            </div>
        </BigBlock>
    )
}

export default Shows;