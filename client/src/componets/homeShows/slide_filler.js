import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import {Btn, PS, PB, H2, H3} from "../../styles/homeStyle"
import{ Slide, SlideBuffer, DuoServiceBlockColumn, Image, TextBox} from '../../styles/providerStyles'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// key={key} id={show.id} showName={show.show_name} about={show.about}
// imgP={show.img} imgB={show.img_b} catagory={show.catagory} subCatagory={show.sub_catagory}
// hostId={show.host_id} hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
// patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage} ETPlus={show.eighteen_plus}
// booked={show.booked} paid={show.paid} canceled={show.canceled} entertain={show.entertain} couns={show.couns} 
// relig={show.relig} timeStamp={show.time_stamp}

function SlideFiller(props){
    const [vis, setVis] = useState(1);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);

    if(Click){
        return <Redirect to={"/shows/" + props.id} />
    }
        
    
    return(
       
            <Slide id={props.id} onClick={i=>setClick(true)} bgImg={props.bImg}>
                <SlideBuffer bgImg={props.imgB} style={{opacity: vis ,backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                    <DuoServiceBlockColumn>
                        <Image src={props.imgP} alt={props.showName}/>
                    </DuoServiceBlockColumn>
                    <DuoServiceBlockColumn>
                        <TextBox>
                            <H3>{props.showName}</H3>
                            <PB>{props.hostName}</PB>
                        </TextBox>
                        {/* <a className="nav-link" style={{textDecoration: 'none'}} href={"/hosts/" + props.id}><Button variant='contained'>View {props.userName}'s profile</Button></a> */}
                    </DuoServiceBlockColumn>
                </SlideBuffer>
                
            </Slide>
             
        
        // <Slide id={props.id} style={{backgroundImage: `url(${props.bImg})` }} > 
        //     <TextBox style={{opacity: vis ,backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
        //         <H2 >{props.userName}</H2>
        //         <PB>{props.title}</PB>
        //         <a className="nav-link" style={{textDecoration: 'none'}}href={"/hosts/" + props.id}><Button variant="outline">View {props.userName}'s profile</Button></a>
        //     </TextBox>
            
            
        // </Slide>
    )
}
export default SlideFiller


