import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, TextBox,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';

function HostFiller(props){
    return(
        <DuoServiceBlock bgImg={props.bImg}>
            <DuoServiceBlockColumn>
                <Image src={props.pImg} alt={props.userName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.userName}</H2B>
                    <PG>{props.title}</PG>
                </TextBox>
                <a style={{textDecoration: 'none'}} className="nav-link" href={"/hosts/" + props.id}><Button variant="contained">View {props.userName}'s profile</Button></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>
    )
}
export default HostFiller


