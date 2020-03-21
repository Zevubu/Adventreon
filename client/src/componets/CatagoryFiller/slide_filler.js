import React from 'react';
import {Btn, PS, PB, H2} from "../../styles/homeStyle"
import{ Slide, DuoServiceBlockColumn, Image, TextBox} from '../../styles/providerStyles'
// function holdingBox (props){
//     return(
//         <ServiceBlock>
            
//         </ServiceBlock>
//     )
// }
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function SlideFiller(props){
    return(
        <Slide id={props.id}>
            <DuoServiceBlockColumn>
                <Image src={props.img} alt={props.userName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2>{props.userName}</H2>
                    <PB>{props.title}</PB>
                    <PS>{props.about}</PS>
                </TextBox>
                <a className="nav-link" style={{textDecoration: 'none'}} href={"/hosts/" + props.id}><Button variant='contained'>View {props.userName}'s profile</Button></a>
            </DuoServiceBlockColumn>
        </Slide>
    )
}
export default SlideFiller


