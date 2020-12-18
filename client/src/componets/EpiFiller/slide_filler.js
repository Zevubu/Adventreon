import React, {useState} from 'react';
import {H2} from "../../styles/homeStyle"
import{ShowSlide, SlideBuffer, DuoServiceBlockColumn, TextBox} from '../../styles/providerStyles'

function SlideFiller(props){
    const [bgC, setbgC] = useState();
    return(
        <ShowSlide id={props.id}bgImg={props.Img} alt={props.epiName}>
            <SlideBuffer style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                <DuoServiceBlockColumn>
                    <TextBox>
                        <H2>{props.epiName}</H2>
                    </TextBox>
                </DuoServiceBlockColumn>
            </SlideBuffer>       
        </ShowSlide>   
    )
}

export default SlideFiller


