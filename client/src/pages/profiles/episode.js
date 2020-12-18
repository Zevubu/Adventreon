import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import API from "../../API/loggedInAPI";
import {P, H1NB, H3, BlueHeader, H2, HEp} from "../../styles/homeStyle"
import{ ProDuoServiceBlockColumnB, ProviderBox, ProTextBoxN, ProDuoServiceBlockB, ProTextBox} from '../../styles/providerStyles'
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Episode(){
    let { id } = useParams();
    const [epi, setEpi] = useState({});
    const matches = useMediaQuery('(min-width:600px)');
    const token = window.localStorage.getItem('tokens');

    useEffect(() => {
        const fetchEpis = async () =>{
         const result = await API.getEpisodesByID(token,`${id}`)
             setEpi(result.data[0])
           
         };
         fetchEpis(); 
     }, []);

    return(
        <div>
            <BlueHeader id={epi.id}>
                <H2>{epi.epi_name}</H2>
            </BlueHeader>
            <ProviderBox>
                <ProDuoServiceBlockB>
                    <iframe 
                    src={epi.v_link}
                    title={epi.epi_name}
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen/>
                </ProDuoServiceBlockB>
                { matches ?
                    <ProDuoServiceBlockColumnB>
                        <Paper elevation={3} style={{padding: '10px', borderRadius: '50px',backgroundColor: 'grey', marginbottom: '20px'}}x>
                            <ProTextBoxN>
                                <H1NB id={epi.show_id}>{epi.show_name}</H1NB>
                                <HEp>{epi.epi_name}</HEp>
                                <H3 id={epi.host_id}>By {epi.host_name}</H3>
                            </ProTextBoxN>
                            <ProTextBox>
                                <H3>About</H3>
                                <P>{epi.about}</P> 
                            </ProTextBox> 
                            {/* <ProTextBox>
                                <H3>Tip Me Here.</H3>
                                <br/>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick"/>
                                    <input type="hidden" name="hosted_button_id" value="92TZKHPM5****"/>
                                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online."/>
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                                </form>
                            </ProTextBox> */}
                            <ProTextBox>
                                <H3>My patreon.</H3>
                                <P>{epi.patreon}</P>
                            </ProTextBox>
                            <ProTextBox>
                                <H3>{epi.wp_title}</H3>
                                <a href={epi.webpage}><P>{epi.webpage}</P></a>
                            </ProTextBox>
                        </Paper>
                    </ProDuoServiceBlockColumnB>
                :
                ""
                }
            </ProviderBox>
        </div>             
    )
}

export default Episode;