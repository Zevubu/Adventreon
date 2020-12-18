import React from "react";
import { BigBlock} from "../../../styles/homeStyle";
import ShowSubCatBox from '../base_filler/shows_subcat'

function Shows (){
    return(
        <BigBlock>
            <div>
                <ShowSubCatBox Cat="life" SubCat="counseling" Name="Counseling"/>
            </div>
            <div>
                <ShowSubCatBox Cat="life" SubCat="cooking" Name="Cooking"/>
            </div>
            <div>
                <ShowSubCatBox Cat="life" SubCat="lifehack" Name="Life Hacks"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="life" SubCat="variety" Name="Variety"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="life" SubCat="educate" Name="Educational"/> 
            </div>
            <div>
                <ShowSubCatBox Cat="life" SubCat="blog" Name="Personal Vlogs"/> 
            </div>
        </BigBlock>
    )
}

export default Shows;