import React, { useState, useEffect} from "react";
import {BigBlock, LookBox,LookBtn,SlideShadowBox, DivWBorder, SpHeaderA,H2, HeaderItem} from "../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../API/loggedInAPI";
import SliderFiller from "../ShowFiller/slide_filler";
import Carousel from '@brainhubeu/react-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Shows (){
    const [shows, setShows] = useState([]);
    const [pullSwith, setPullSwitch] = useState(false);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    const token = window.localStorage.getItem('tokens');

    useEffect(() => {
        const fetchShowsCNT = async () =>{
            const count = await API.getShowCatNumCheck(token,{
                'category':'music',
            })
            // console.log(`Music shows #${count.data[0].total} true false check:${count.data[0].total !== 0}`)
            if(count.data[0].total !== 0 || count.data[0].total !== undefined){
                setPullSwitch(true)
                // console.log(`Music confirm check`)
            }
            else{
                // console.log(`Music fail check`)
                return
            }
        }
        fetchShowsCNT()  
    }, []);
    
    if(pullSwith){
        const fetchShows = async () =>{
            const result = await API.getShowCateg(token,{
                'category':'music',
            })
                // console.log(`Music show data ${result.data}`)
                setShows(result.data)
            };
        setPullSwitch(false)
        fetchShows();
    }

    if(Click){
        return <Redirect to="/music" />
    }

    return(
        <div>
            {shows.length !== 0 &&(
                <BigBlock>
                    {/* Shows will be auto populated from database, Items put in as filler*/}
                    <DivWBorder  Margin ="0px 0px 23px 0px">
                        <SpHeaderA>
                            <HeaderItem>
                                <H2
                                    onClick={i=>setClick(true)}
                                    style={{backgroundColor: bgC}} 
                                    onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                                    onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                                >Music</H2>
                            </HeaderItem>
                        </SpHeaderA>
                    </DivWBorder>
                    <br/>
                    <LookBox>
                        <SlideShadowBox></SlideShadowBox>
                        <LookBtn>
                            <div>
                                <Carousel
                                    animationSpeed={1500}
                                    slidesPerPage={num}
                                    offset={50}
                                    slidesPerScroll={scNum}
                                    arrows
                                    // infinite   
                                >
                                    {shows.map((show, key) => (
                                        <SliderFiller
                                            key={key} id={show.id} showName={show.show_name}
                                            imgP={show.img} imgB={show.img_b} hostName={show.host_name}
                                            price={show.price} ETPlus={show.eighteen_plus} 
                                            paid={show.paid} timeStamp={show.time_stamp}
                                        />
                                    ))}
                                </Carousel> 
                            </div>
                        </LookBtn>   
                    </LookBox>
                </BigBlock>
            )}
        </div>
    )
}

export default Shows;