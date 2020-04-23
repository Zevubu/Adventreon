import React, { useState, useEffect} from "react";
import { BigBlock, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../../../API/loggedOutAPI";

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
// catagory, x
// sub_catagory, x
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
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1

    useEffect(() => {
       const fetchShows = async () =>{
        const result = await API.getCounsShows()
            console.log(`show data ${result.data}`)
            setShows(result.data)
        };
        fetchShows(); 
    }, []);

    if(Click){
        return <Redirect to="/counseling" />
    }
    // opacity: vis ,
    return(
        <BigBlock>
            {/* Shows will be auto populated from database, Items put in as filler*/}
            {/* <a id="Shows"/> */}
            <DivWBorder>
            <SpHeaderA BGcolor="rgba(236, 228, 195, 0.666)">
                <HeaderItem>
                    <H2 color="rgb(66, 83, 94)"
                        onClick={i=>setClick(true)}
                        style={{backgroundColor: bgC}} 
                        onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                        onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                    >Spells</H2>
                </HeaderItem>
                {/* <HeaderItem>
                    <a className="nav-link" href="/shows"><MarronBtn>See all</MarronBtn></a>
                </HeaderItem> */}
            </SpHeaderA>
            </DivWBorder>
            <br/>
            
            <Carousel
                // autoPlay={5000}
                animationSpeed={1500}
                slidesPerPage={num}
                offset={50}
                slidesPerScroll={scNum}
                arrows
                infinite
                dots
            >
            
         
                {shows.map((show, key) => (
    
                        <SliderFiller
                            key={key} id={show.id} showName={show.show_name} about={show.about}
                            imgP={show.img} imgB={show.img_b} catagory={show.catagory} subCatagory={show.sub_catagory}
                            hostId={show.host_id} hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                            patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage} ETPlus={show.eighteen_plus}
                            booked={show.booked} paid={show.paid} canceled={show.canceled} entertain={show.entertain} couns={show.couns} 
                            relig={show.relig} timeStamp={show.time_stamp}
                        />
                ))}
            </Carousel>
        </BigBlock>
    )
}

export default Shows;