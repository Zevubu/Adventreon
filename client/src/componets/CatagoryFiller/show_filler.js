import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, Btn, TextBox, PS,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// key={key} id={show.id} showName={show.show_name} about={show.about} pImg={show.img} bImg={show.b_img}
// catagory={show.catagory} subCatagory={show.sub_catagory} hostId={show.host_id} 
// hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
// patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage}
// eighteenPlus={show.eighteen_plus} booked={show.booked} 
// paid={show.paid} canceled={show.canceled} entertain={show.entertain}
// couns={show.couns} relig={show.relig} timeStamp={show.time_stamp}

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