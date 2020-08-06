import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,SlideShadowBox,LookHostBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
// import {Logo} from "../../styles/componentStyles";
import API from "../../../API/loggedInAPI";

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
    const num = matches ? 5 : 1;
    const scNum = matches ? 4 : 1;
    const token = window.localStorage.getItem('tokens');
    
    useEffect(() => {
        const fetchHostCNT = async () =>{
            const count = await API.getHostCatNumCheck(token,'music')
            // console.log(Music Host count #${JSON.stringify(count.data.total)} true false check:${count.data.total !== 0}`)
            if(count.data.total !== 0){
                setPullSwitch(true)
                // console.log(`Music host confirm check`)
            }
            else{
                // console.log(`Music host fail check`)
                return
            }
        }
        fetchHostCNT() 
    }, []);

    if(pullSwith){
        const fetchHosts = async () =>{
            const result = await API.getHostByCat(token,{
                'category':'music',
            })
            // console.log(`Muse pull switch check`)
            setHosts(result.data)
        };
        setPullSwitch(false);
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
            <DivWBorder Margin ="0px 0px 23px 0px">
            <SpHeaderA>
                <HeaderItem>
                    <H2
                                             
                        onClick={i=>setClick(true)}
                        style={{backgroundColor: bgC}} 
                        onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} 
                        onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}
                    >
                    Host's</H2>
                    </HeaderItem>
                    {/* <HeaderItem>
                        <a className="nav-link" href="/Hosts" style={{textDecoration: 'none'}}><Button variant="contained" color='secondary'>See all</Button></a>
                    </HeaderItem> */}
                </SpHeaderA>
            </DivWBorder>
            <br/>
            
            <LookHostBox>
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
        </BigBlock>
        )}
        </div>
    )
}

export default Hosts;