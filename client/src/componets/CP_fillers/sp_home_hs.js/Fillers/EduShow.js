import React, { useState, useEffect} from "react";
import {BigBlock,LookBtn,SlideShadowBox,LookBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../../../API/loggedInAPI";

import SliderFiller from "../../../ShowFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '../../../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// show_name,x 
// about, x
// img, x
// img_b, x
// category, x
// sub_category, x
// host_id,x
// host_name,x 
// host_img, x
// payment, x
// patreon, x
// wp_title, x
// webpage,x 
// eighteen_plus, x
// booked, x 
// paid, x
// canceled, x
// entertain,
// couns, 
// relig

function Shows (){
    const [shows, setShows] = useState([]);
    // const [vis, setVis] = useState(1);
    const [pullSwith, setPullSwitch] = useState(false);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    const token = window.localStorage.getItem('tokens');

    useEffect(() => {
        const fetchShowsCNT = async () =>{
            const count = await API.getShowSubcatNumCheck(token,{
                'category':'spiritual',
                'sub_category':'educate'
            })
            // console.log(`Spiritual educate count #${count.data[0].total} true false check:${count.data[0].total !== 0}`)
            if(count.data[0].total !== 0){
                setPullSwitch(true)
                // console.log(`Spiritual educate confirm check`)
            }
            else{
                // console.log(`Spiritual educate fail check`)
                return
            }
        }
        fetchShowsCNT()  
    }, []);

    if(pullSwith){
        const fetchShows = async () =>{
            const result = await API.getShowSubcat(token,{
                'category':'spiritual',
                'sub_category':'educate'
            })
                // console.log(`Spiritual educate show data ${result.data}`)
                setShows(result.data)
            };
        setPullSwitch(false)
        fetchShows();
    }

    if(Click){
        return <Redirect to="/" />
    }
    // opacity: vis , 
    return(
        <div>{shows.length !== 0 &&(
            
        <BigBlock>
            {/* Shows will be auto populated from database, Items put in as filler*/}
            {/* <a id="Shows"/> */}
            <DivWBorder>
                <SpHeaderA>
                    <HeaderItem>
                        <H2
                            onClick={i=>setClick(true)}
                            style={{backgroundColor: bgC}} 
                            onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                            onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                        >Educational</H2>
                    </HeaderItem>
                    {/* <HeaderItem>
                        <a className="nav-link" href="/shows"><MarronBtn>See all</MarronBtn></a>
                    </HeaderItem> */}
                </SpHeaderA>
            </DivWBorder>
            <br/>
            <LookBox>
                <SlideShadowBox></SlideShadowBox>
                <LookBtn>
                    <div>
                        <Carousel
                            // autoPlay={5000}
                            animationSpeed={1500}
                            slidesPerPage={num}
                            offset={50}
                            slidesPerScroll={scNum}
                            arrows
                            // infinite
                        >
                        
                    
                            {shows.map((show, key) => (
                
                                    <SliderFiller
                                        key={key} id={show.id} showName={show.show_name} about={show.about}
                                        imgP={show.img} imgB={show.img_b} category={show.category} subCatagory={show.sub_category}
                                        hostId={show.host_id} hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                                        patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage} ETPlus={show.eighteen_plus}
                                        booked={show.booked} paid={show.paid} canceled={show.canceled} entertain={show.entertain} couns={show.couns} 
                                        relig={show.relig} timeStamp={show.time_stamp}
                                    />
                            ))}
                        </Carousel> 
                    </div>
                </LookBtn>   
            </LookBox>
        </BigBlock>)}</div>
    )
}

export default Shows;