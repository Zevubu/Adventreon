import React, {useState} from 'react';
import { PB, H2} from "../../styles/homeStyle"
import{ Slide, ShowSlide, SlideBuffer, DuoServiceBlockColumn, Image, TextBox} from '../../styles/providerStyles'


function SlideFiller(props){
    const [bgC, setbgC] = useState();
    return(
        <ShowSlide id={props.id}bgImg={props.Img} alt={props.epiName}>
            <SlideBuffer style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                <DuoServiceBlockColumn>
                    <TextBox>
                        <H2>{props.epiName}</H2>
                    </TextBox>
                    {/* <a className="nav-link" style={{textDecoration: 'none'}} href={"/hosts/" + props.id}><Button variant='contained'>View {props.userName}'s profile</Button></a> */}
                </DuoServiceBlockColumn>
            </SlideBuffer>       
        </ShowSlide>   
    )
}
export default SlideFiller


