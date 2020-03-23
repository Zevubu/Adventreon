import React, { useState, useEffect} from "react";
import {DivWBorder, BigBlock, BlueHeader, H2, MarronBtn, HeaderItem} from "../../styles/homeStyle";
import {Logo} from "../../styles/componentStyles";
import API from "../../API/loggedOutAPI";

import SliderFiller from "../HostFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Hosts (){ 
    const [Hosts, setHosts] = useState([]);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 2 : 1
    
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
            <DivWBorder style={{marginBottom: '100px'}}>
                <BlueHeader>
                    <HeaderItem>
                        <H2>Host's</H2>
                    </HeaderItem>
                    <HeaderItem>
                        <a className="nav-link" href="/Hosts" style={{textDecoration: 'none'}}><Button variant="contained" color='secondary'>See all</Button></a>
                    </HeaderItem>
                </BlueHeader>
                

                <Carousel
                    // autoPlay={5000}
                    animationSpeed={1500}
                    slidesPerPage={num}
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