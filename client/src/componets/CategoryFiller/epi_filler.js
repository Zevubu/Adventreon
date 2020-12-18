import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, TextBox, PS,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';

function EpisodeFiller(props){
    return(
        <DuoServiceBlock bgImg={props.bImg}>
            <DuoServiceBlockColumn>
                <Image src={props.pImg} alt={props.epiName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.epiName}</H2B>
                    <PG>{props.showName}</PG>
                    <PS>{props.hostName}</PS>
                </TextBox>
                <a className="nav-link" style={{textDecoration: 'none'}} href={"/episodes/" + props.id}><Button variant='contained'>Click here to see episodes.</Button></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>

    )
}
export default EpisodeFiller;