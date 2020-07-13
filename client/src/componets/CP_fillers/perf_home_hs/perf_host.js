import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,LookTextBox,LookHostBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
// import {Logo} from "../../styles/componentStyles";
import API from "../../../API/loggedOutAPI";

import SliderFiller from "../../HostFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '../../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
// import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
 

function Hosts (){ 
    const [hosts, setHosts] = useState([]);
    // const [vis, setVis] = useState(1);
    const [pullSwith, setPullSwitch] = useState(false);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    
    useEffect(() => {
        const fetchHostCNT = async () =>{
            const count = await API.getHostCatNumCheck('performance')
            console.log(`muse count:${JSON.stringify(count)}`)
            if(count.data.total !== 0){
                setPullSwitch(true)
                console.log(`Performance host confirm check`)
            }
            else{
                console.log(`Performance host fail check`)
                return
            }
        }
        fetchHostCNT() 
    }, []);

    if(pullSwith){
        const fetchHosts = async () =>{
            const result = await API.getPerfHosts()
            // console.log(`Performance pull switch check`)
            setHosts(result.data)
        };
        setPullSwitch(false)
        fetchHosts();
    }

    if(Click){
        return <Redirect to="/hosts" />
    }
    
// opacity: vis ,
    return(
        <div>
        {hosts.length !== 0 &&(
        <BigBlock>
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            {/* <a id="Hosts"/> */}
            {/* <DivWBorder style={{marginBottom: '100px'}}> */}
            <DivWBorder >
                <SpHeaderA >
                    <HeaderItem>
                    <H2                           
                        onClick={i=>setClick(true)}
                        style={{backgroundColor: bgC}} 
                        onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                        onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                    >
                    Hosts</H2>
                    </HeaderItem>
                    {/* <HeaderItem>
                        <a className="nav-link" href="/Hosts" style={{textDecoration: 'none'}}><Button variant="contained" color='secondary'>See all</Button></a>
                    </HeaderItem> */}
                </SpHeaderA>
            </DivWBorder>
            <br/>
            <LookHostBox>
                <LookTextBox></LookTextBox>
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
                            {hosts.map((host, key) => (
                                <SliderFiller
                                    key={key} id={host.id} userName={host.user_name}
                                    title={host.title} pImg={host.p_img} bImg={host.b_img}
                                />
                            ))}

                        </Carousel> 
                    </div>
                </LookBtn>   
            </LookHostBox>
            {/* </DivWBorder> */}
        </BigBlock>)}
        </div>
    )
}

export default Hosts;