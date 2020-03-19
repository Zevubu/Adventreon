import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, Btn, TextBox, PS,H2B,PG} from "../../styles/homeStyle"

// function holdingBox (props){
//     return(
//         <ServiceBlock>
            
//         </ServiceBlock>
//     )
// }

function HostFiller(props){
   

    return(
        <DuoServiceBlock>
            <DuoServiceBlockColumn>
                <Image src={props.img} alt={props.userName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.userName}</H2B>
                    <PG>{props.title}</PG>
                    <PS>{props.about}</PS>
                </TextBox>
                <a className="nav-link" href={"/hosts/" + props.id}><Btn>Veiw {props.userName}'s profile</Btn></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>

    )
}
export default HostFiller


