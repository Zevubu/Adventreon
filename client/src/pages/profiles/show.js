import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import {Link} from 'react-router-dom';
import API from "../../API/loggedInAPI";
// import eAPI from "../../API/epiLogOut"
import { Redirect } from "react-router-dom";
import {P,H2, H1, H3, SpHeaderA, FillerBar} from "../../styles/homeStyle"
import{ ProviderBox,ProBGColor,ProBigBox, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProImage, ProTextBox} from '../../styles/providerStyles'
import EpisodeFiller from "../../componets/EpiFiller/slide_filler"
import Carousel from '@brainhubeu/react-carousel';
import '../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';

// chiquioasis
// show_name,x
// about,x
// img, x
// img_b, 
// category, 
// sub_category, 
// host_id, 
// host_name, x
// host_img, 
// payment, 
// patreon, 
// wp_title, 
// webpage, 
// eighteen_plus, 
// booked, paid, 
// canceled, 
// entertain,
// couns, 
// relig

function Show(){
    let { id } = useParams();
    const [Show, setShow] = useState([]);
    const [Episodes, setEpisodes] = useState([]);
    const [oneOff, setOneOff] = useState();
    const [episodical, setEpisodical] = useState();
    const [playing, setPlaying] = useState()
    const [hClick, setHClick] = useState(false)
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1;
    const scNum = matches ? 4 : 1;
    const frame = matches ? 560 : 375;
    const token = window.localStorage.getItem('tokens');

    useEffect(() => {
        console.log(`Show Id:${id}`)
        const fetchShow = async () =>{
            const result = await API.getShowByID(token,`${id}`)
            setShow(result.data[0])
        
        };
        fetchShow();  
    }, []);

    if(Show && !episodical && !oneOff){
        if(Show.show_type === "one_off"){
            setOneOff(true)

        }else if(Show.show_type === "episodical"){
            const fetchEpis = async () =>{
                        const result = await API.getEpisByShowID(token,`${id}`)
                            // console.log(result.data)
                            setEpisodes(result.data)
                            setEpisodical(true)
                            setPlaying(result.data[0])
                        };
                    fetchEpis();
        } 
    }
    if(hClick){
        return <Redirect to={"/hosts/" + Show.host_id} />
    }

    return(
        <ProBGColor>
            {Show &&(
               <ProBigBox bgImg={Show.img_b}>
            <div>
                
                <SpHeaderA id={Show.id} BGcolor="rgba(0,0,0,0)">
                        <Paper elevation={3} style={{padding: '0px', borderRadius: '0px',backgroundColor: 'rgba(180,180,180,0.2)', marginbottom: '20px'}}>
                            <ProTextBox>
                                <H1>{Show.show_name}</H1>
                                <Link onClick={i=>setHClick(true)}><H3 id={Show.host_id}>{Show.host_name}</H3></Link>
                            </ProTextBox>
                        </Paper>
                    </SpHeaderA>
                    <ProviderBox id={Show.id}>
                        <ProDuoServiceBlock>
                            {oneOff &&(
                                <iframe 
                                    src={Show.v_link}
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen" 
                                    allowfullscreen> 
                                </iframe>
                            )}
                            {episodical && !playing && (
                            
                                <ProImage src={Show.img} alt={Show.show_name}/>
                            )}
                            {episodical && playing &&(
                                <div>
                                    
                            <H2>{playing.epi_name} #{playing.id}</H2>                
                                    
                                    <iframe 
                                        src={playing.v_link}
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen> 
                                    </iframe>
                                </div>
                            )}
                        </ProDuoServiceBlock>
                            <ProDuoServiceBlockColumn>
                                <Paper elevation={3} style={{padding: '10px', borderRadius: '0px',backgroundColor: 'rgba(180,180,180,0.2)', marginbottom: '20px'}}x>
                                    {/* <ProTextBoxN>
                                        <H1NB>{Show.show_name}</H1NB>
                                        <Link href={"/hosts/" + Show.host_id}><H3 id={Show.host_id}>By {Show.host_name}</H3></Link>
                                    </ProTextBoxN> */}
                                    {oneOff &&(
                                        <ProTextBox>
                                            <H3>About</H3>
                                            <P>{Show.about}</P> 
                                        </ProTextBox>
                                    )}
                                    {episodical && playing &&(
                                        <div>
                                            <ProTextBox>
                                                <H3>Show details</H3>
                                                <P>{Show.about}</P> 
                                            </ProTextBox>
                                            <ProTextBox>
                                                <H3>Episode details</H3>
                                                <P>{playing.about}</P>
                                            </ProTextBox>
                                            <ProTextBox>
                                                <H3>Episode v_link</H3>
                                                <P>{playing.v_link}</P>
                                            </ProTextBox>
                                        </div>
                                        
                                    )}
                                    
                                    <ProTextBox>
                                        <H3>Tip Me Here.</H3>
                                        <br/>
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="92TZKHPM5****"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online."/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                                        </form>
                                    </ProTextBox>
                                    <ProTextBox>
                                        <H3>My patreon.</H3>
                                        <P>{Show.patreon}</P>
                                    </ProTextBox>
                                    <ProTextBox>
                                        <H3>{Show.wp_title}</H3>
                                        <a href={Show.webpage}><P>{Show.webpage}</P></a>
                                    </ProTextBox>
                                </Paper>
                            </ProDuoServiceBlockColumn>
                    </ProviderBox>
                       {oneOff && (
                    <FillerBar/>
                )}
                
             
                {episodical && ( 
                    <div>
                        {/* <SpHeaderA>
                            <H2>Episodes</H2>
                        </SpHeaderA>
                        <br/>              */}
                        <Carousel
                        // autoPlay={5000}
                        animationSpeed={1500}
                        slidesPerPage={num}
                        offset={50}
                        slidesPerScroll={scNum}
                        arrows
                        dots
                    >
                            {Episodes.map((episode, key) => (
                                <div onClick={i => setPlaying(episode)}>
                                    <EpisodeFiller
                                    key={key}
                                    id={episode.id}
                                    epiName={episode.epi_name}
                                    Img={episode.img}
                                    paid={episode.paid}
                                    price={episode.price}  
                                    showDate={episode.show_date} 
                                    startTime={episode.start_time} 
                                    endTime={episode.end_time}
                                    eighteenPlus={episode.eighteen_plus} 
                                    timeStamp={episode.time_stamp}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
            </ProBigBox> 
            )}  
        </ProBGColor>          
    )
}

export default Show;