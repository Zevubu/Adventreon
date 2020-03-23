import React from 'react';
import {Btn, PS, PB, H2} from "../../styles/homeStyle"
import{ Slide, DuoServiceBlockColumn, Image, TextBox} from '../../styles/providerStyles'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// function holdingBox (props){
//     return(
//         <ServiceBlock>
            
//         </ServiceBlock>
//     )
// }

function SlideFiller(props){
    return(
        <Slide id={props.id} style={{backgroundImage: `url(${props.img})` }} >
            <DuoServiceBlockColumn>
                <TextBox style={{opacity: '0.5',backgroundColor: 'grey'}} onMouseEnter={(e)=> e.target.style.opacity='1'} onMouseLeave={(e)=> e.target.style.opacity="0.5"}>
                    <H2 >{props.userName}</H2>
                    <PB>{props.title}</PB>
                    <PS>{props.about}</PS>
                </TextBox>
                <a className="nav-link" style={{textDecoration: 'none'}}href={"/hosts/" + props.id}><Button variant="outline">View {props.userName}'s profile</Button></a>
            </DuoServiceBlockColumn>
        </Slide>
    )
}
export default SlideFiller


