import React, { useState, useEffect} from "react";
import {DivWBorder, BigBlock, BlueHeader, H2, MarronBtn, HeaderItem} from "../../styles/homeStyle";

import API from "../../API/loggedOutAPI";

import SliderFiller from "../HostFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function Hosts (){ 
    const [Hosts, setHosts] = useState([]);

    useEffect(() => {
       const fetchHosts = async () =>{
        const result = await API.getHosts()
            console.log(`host data ${result.data}`)
            setHosts(result.data)
        };
        fetchHosts(); 
    }, []);

    return(
        <BigBlock>
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            {/* <a id="Hosts"/> */}
            <DivWBorder>
                <BlueHeader>
                    <HeaderItem>
                        <H2>Meet our intimacy experts</H2>
                    </HeaderItem>
                    <HeaderItem>
                        <a className="nav-link" href="/Hosts"><MarronBtn>See all</MarronBtn></a>
                    </HeaderItem>
                </BlueHeader>
                
                <Carousel
                    autoPlay={5000}
                    animationSpeed={2500}
                    slidesPerPage={2}
                    arrows
                    infinite
                    dots
                >
                    {Hosts.map((host, key) => (
                            <SliderFiller
                                key={key} id={host.id} userName={host.user_name} userType={host.user_type}
                                title={host.title} about={host.about} img={host.p_img}
                                services ={host.shows} appointments={host.appointments}
                                availability={host.availability} screened={host.screened} 
                                timeStamp={host.time_stamp}
                            />
                    ))}
            </Carousel>
            </DivWBorder>
           
            
        </BigBlock>
    )
}

export default Hosts;