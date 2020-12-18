import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {PB,H2} from "../../styles/homeStyle"
import{ShowSlide,SlideShowImg, SlideShowBuffer,TextBox} from '../../styles/providerStyles'

function SlideFiller(props){
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);

    if(Click){
        return <Redirect to={"/shows/" + props.id} />
    }   
    return(
        <ShowSlide id={props.id} onClick={i=>setClick(true)} bgImg="x">
            <SlideShowBuffer style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                    <div>
                        <SlideShowImg bgImg={props.imgP} alt={props.showName}/>
                    </div>
                    <TextBox>
                        <H2 color="rgba(23,23,23)" TSColor="rgba(232,232,232)">{props.showName}</H2>
                        <PB color="rgba(23,23,23)" TSColor="rgba(232,232,232)">{props.hostName}</PB>
                    </TextBox>
            </SlideShowBuffer>       
        </ShowSlide>   
    )
}
export default SlideFiller


