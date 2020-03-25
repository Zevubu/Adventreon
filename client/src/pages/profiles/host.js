import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import API from "../../API/loggedOutAPI";
import {P, Btn, H1NB, H3, BlueHeader,H2,} from "../../styles/homeStyle"
import{ ProviderBox, ShowBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import ShowFiller from "../../componets/CatagoryFiller/show_filler"
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

//  user_name,x
//  user_type, 
//  dob,  
//  title,x 
//  about,x 
//  p_img, x
//  b_img, 
//  shows, 
//  payment, x
//  patreon, x
//  wp_title, x
//  webpage, x
//  video_channel, 
//  rsvp_attend, 
//  rsvp_perform, 
//  entertain, 
//  couns, 
//  relig

function Host(){
    let { id } = useParams();
    const [Hosts, setHosts] = useState([]);
    const [Shows, setShows] = useState([]);
    // const [services, setServices] = useState([])

    useEffect(() => {
        const fetchHost = async () =>{
         const result = await API.getHostByID(`${id}`)
             setHosts(result.data)
           
         };
         const fetchShows = async () =>{
            const result = await API.getShowByHost(`${id}`)
                console.log(result.data)
                setShows(result.data)
              
            };
         fetchHost(); 
         fetchShows();
     }, []);

    return(
        <div>
        {Hosts.map((Host, key) => (
            <div key={key}>
                <BlueHeader id={Host.id}>
                    <H2>{Host.user_name}'s profile </H2>
                </BlueHeader>
                <ProviderBox>
                    <ProDuoServiceBlock>
                        <ProImage src={Host.p_img} alt={Host.user_name}/>
                    </ProDuoServiceBlock>
                    <ProDuoServiceBlockColumn>
                        <Paper elevation={3} style={{padding: '10px', borderRadius: '50px',backgroundColor: 'grey'}}>
                        <ProTextBoxN>
                            <H1NB>{Host.user_name}</H1NB>
                            <H3>{Host.title}</H3>
                        </ProTextBoxN>
                        <ProTextBox>
                            <H3>About</H3>
                            <br/>
                            <P>{Host.about}</P> 
                        </ProTextBox> 
                        <ProTextBox>
                            <H3>Tip Me Here.</H3>
                            <br/>
                            <P>{Host.payment}</P>
                        </ProTextBox>
                        <ProTextBox>
                            <H3>My patreon.</H3>
                            <br/>
                            <P>{Host.patreon}</P>
                        </ProTextBox>
                        <ProTextBox>
                            <H3>{Host.wp_title}</H3>
                            <br/>
                            <a href={Host.webpage}><P>{Host.webpage}</P></a>
                        </ProTextBox>
                        </Paper>
                    </ProDuoServiceBlockColumn>
                   
                </ProviderBox>
                <BlueHeader>
                    <H2>{Host.user_name}'s shows. </H2>
                </BlueHeader>
            </div>
        ))}
             
            <ShowBox>
                {Shows.map((show, key) => (
                    <ShowFiller
                    key={key} id={show.id} showName={show.show_name} about={show.about} pImg={show.img} bImg={show.b_img}
                    catagory={show.catagory} subCatagory={show.sub_catagory} hostId={show.host_id} 
                    hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                    patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage}
                    eighteenPlus={show.eighteen_plus} booked={show.booked} 
                    paid={show.paid} canceled={show.canceled} entertain={show.entertain}
                    couns={show.couns} relig={show.relig} timeStamp={show.time_stamp}
                    />
                ))}
            </ShowBox>
        </div>             
    )
}

export default Host;