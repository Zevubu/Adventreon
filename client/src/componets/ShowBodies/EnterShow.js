import React, {useState,useEffect} from "react";
import {BigBlock,LookBtn,SlideShadowBox,LookBox,DivWBorder,SpHeaderA,H2,H2Dark,HeaderItem} from "../../styles/homeStyle";
import {Redirect} from "react-router-dom";
import API from "../../API/loggedInAPI";
import SliderFiller from "../ShowFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
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
    const scNum = matches ? 5 : 1

    useEffect(() => {
        const fetchShowsCNT = async () =>{
            const count = await API.getShowCatNumCheck({
                'category':'performance',
            })
            console.log(`Performance shows:${JSON.stringify(count)}`)
            if(count.data.total !== 0 || count.data.total !== undefined){
                setPullSwitch(true)
                console.log(`Performance confirm check`)
            }
            else{
                console.log(`Performance fail check`)
                return
            }
        }
        fetchShowsCNT()   
    }, []); 
        
    if(pullSwith){
        const fetchShows = async () =>{
            const result = await API.getShowCateg({
                'category':'performance',
            })
                // console.log(`Performance show data ${result.data}`)
                setShows(result.data)
            };
        setPullSwitch(false)
        fetchShows();
    }

    if(Click){
        return <Redirect to="/performance" />
    }
    // opacity: vis , 
    return(
        <div>
            {shows.length !== 0 &&(
        <BigBlock>
            {/* Shows will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
            <SpHeaderA>
                <HeaderItem>
                    <H2
                        onClick={i=>setClick(true)}
                        style={{backgroundColor: bgC}} 
                        onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                        onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                    >Performance Art</H2>
                </HeaderItem>
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
        </BigBlock>   
        )}
        </div>
    )
}

export default Shows;