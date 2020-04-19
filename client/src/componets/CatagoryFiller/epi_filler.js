import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, TextBox, PS,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

// key={key} id={episode.id} epiName={episode.epi_name} about={episode.about} pImg={episode.img} bImg={Show.b_img}
// showId={episode.show_id} showName={episode.show_name} catagory={episode.catagory} subCatagory={episode.sub_catagory}
// hostId={episode.host_id} hostName={episode.host_name} bImg={episode.b_img} credits={episode.credits}
// price={episode.price} payment={episode.payment} patreon={episode.patreon} wpTitle={episode.wp_title} webpage={episode.webpage}
// Videolink={episode.v_link} showDate={episode.show_date} startTime={episode.start_time} endTime={episode.end_time}
// eighteenPlus={episode.eighteen_plus} booked={episode.booked} 
// paid={episode.paid} canceled={episode.canceled} entertain={episode.entertain}
// couns={episode.couns} relig={episode.relig} timeStamp={episode.time_stamp}

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