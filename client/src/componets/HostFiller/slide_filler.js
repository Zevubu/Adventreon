import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {H2} from "../../styles/homeStyle"
import{ Slide, SlideBuffer,SlideImg,TextBox} from '../../styles/providerStyles'

function SlideFiller(props){
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);

    if(Click){
        return <Redirect to={"/hosts/" + props.id} />
    }

    return(
        <Slide id={props.id} onClick={i=>setClick(true)} bgImg="x">
            <SlideBuffer bgImg={props.pImg} style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                <div><SlideImg bgImg={props.pImg} alt={props.userName}/></div>
                <TextBox>
                    <H2 color="rgba(23,23,23)" TSColor="rgba(232,232,232)">{props.userName}</H2>
                </TextBox>
            </SlideBuffer>
        </Slide>
    )
}
export default SlideFiller


