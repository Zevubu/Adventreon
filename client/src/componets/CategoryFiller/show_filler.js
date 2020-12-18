import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, TextBox, PS,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';
function ShowFiller(props){
    return(
        <DuoServiceBlock bgImg={props.bImg}>
            <DuoServiceBlockColumn>
                <Image src={props.pImg} alt={props.showName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.showName}</H2B>
                    <PG>By {props.hostName}</PG>
                    <PS>{props.about}</PS>
                </TextBox>
                <a style={{textDecoration: 'none'}} className="nav-link" href={"/shows/" + props.id}><Button variant='contained'>Click here to see episodes.</Button></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>
    )
}
export default ShowFiller;