import React, {useState} from 'react';
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
    const [vis, setVis] = useState(0.6)
    return(
        <Slide id={props.id} style={{backgroundImage: `url(${props.img})` }} >
            <DuoServiceBlockColumn>
                <TextBox style={{opacity: vis ,backgroundColor: 'grey'}} onMouseEnter={(e)=> setVis(0.8)} onMouseLeave={(e)=> setVis(0.6)}>
                    <H2 >{props.userName}</H2>
                    <PB>{props.title}</PB>
                    <PS>{props.about}</PS>
                    <a className="nav-link" style={{textDecoration: 'none'}}href={"/hosts/" + props.id}><Button variant="outline">View {props.userName}'s profile</Button></a>
                </TextBox>
                
            </DuoServiceBlockColumn>
        </Slide>
    )
}
export default SlideFiller


