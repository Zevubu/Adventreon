import React from 'react';
import {DuoServiceBlock, DuoServiceBlockColumn,Image, TextBox, PS,H2B,PG} from "../../styles/homeStyle"
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';


function ShowFiller(props){
   

    return(
        <DuoServiceBlock bgImg={props.imgB}>
            <DuoServiceBlockColumn>
                <Image src={props.imgP} alt={props.showName}/>
            </DuoServiceBlockColumn>
            <DuoServiceBlockColumn>
                <TextBox>
                    <H2B>{props.userName}</H2B>
                    <PG>{props.hostName}</PG>
                    <PS>{props.about}</PS>
                </TextBox>
                <a style={{textDecoration: 'none'}} className="nav-link" href={"/Shows/" + props.id}><Button variant="contained">Veiw {props.userName}'s profile</Button></a>
            </DuoServiceBlockColumn>
        </DuoServiceBlock>
    )
}
export default ShowFiller


