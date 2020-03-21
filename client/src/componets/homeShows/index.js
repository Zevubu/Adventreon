import React, { useState, useEffect} from "react";
import {DivWBorder, BigBlock, BlueHeader, H2, MarronBtn, HeaderItem} from "../../styles/homeStyle";

import API from "../../API/loggedOutAPI";

import SliderFiller from "../ShowFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function shows (){
    const [Shows, setShows] = useState([]);

    useEffect(() => {
       const fetchShows = async () =>{
        const result = await API.getShows()
            console.log(`show data ${result.data}`)
            setShows(result.data)
        };
        fetchShows(); 
    }, []);

    return(
        <BigBlock>
            {/* Shows will be auto populated from database, Items put in as filler*/}
            {/* <a id="Shows"/> */}
            <DivWBorder>
                <BlueHeader>
                    <HeaderItem>
                        <H2>Shows</H2>
                    </HeaderItem>
                    <HeaderItem>
                        <a className="nav-link" href="/shows"><MarronBtn>See all</MarronBtn></a>
                    </HeaderItem>
                </BlueHeader>
                
                <Carousel
                    // autoPlay={5000}
                    animationSpeed={1500}
                    slidesPerPage={2}
                    arrows
                    infinite
                    dots
                >
                {/* // 
                // show_name,x 
                // about, x
                // img, x
                // img_b, x
                // catagory, x
                // sub_catagory, 
                // host_id,
                // host_name, 
                // host_img, 
                // payment, 
                // patreon, 
                // wp_title, 
                // webpage, 
                // eighteen_plus, 
                // booked, 
                // paid, 
                // canceled, 
                // entertain,
                // couns, 
                // relig */}
                  {Shows.map((show, key) => (
      
                            <SliderFiller
                                key={key} id={show.id} showName={show.show_name} about={show.about}
                                imgP={show.img} imgB={show.img_b} catagory={show.catagory} subCatagory={show.sub_catagory}
                                services ={show.shows} appointments={show.appointments}
                                availability={show.availability} screened={show.screened} 
                                timeStamp={show.time_stamp}
                            />
                  ))}

            </Carousel>
            </DivWBorder>
        </BigBlock>
    )
}

export default shows;