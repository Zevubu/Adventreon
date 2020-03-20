import React from 'react';
import {Btn, PS, PB, H2} from "../../styles/homeStyle"
import{ Slide, DuoServiceBlockColumn, Image, TextBox} from '../../styles/providerStyles'
// function holdingBox (props){
//     return(
//         <ServiceBlock>
            
//         </ServiceBlock>
//     )
// }

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
                <a className="nav-link" href={"/hosts/" + props.id}><Btn>Veiw {props.userName}'s profile</Btn></a>
            </DuoServiceBlockColumn>
        </Slide>
    )
}
export default SlideFiller


