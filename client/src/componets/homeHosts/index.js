import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,SlideShadowBox,LookHostBox, SpHeaderA, DivWBorder, H2, HeaderItem} from "../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../API/loggedInAPI";
import SliderFiller from "../HostFiller/slide_filler";
import Carousel from '@brainhubeu/react-carousel';
import '../../styles/Carousel.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Hosts (){ 
    const [Hosts, setHosts] = useState([]);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1;
    const scNum = matches ? 4 : 1;
    const token = window.localStorage.getItem('tokens');
    
    useEffect(() => {
        const fetchHosts = async () =>{
            const result = await API.getHosts(token)
            // console.log(`All host pull switch check:${JSON.stringify(result)}`)
            if(result.status === 200){
                if(result.data.valid === true){
                    setHosts(result.data.hosts) 
                } 
            }
        };
        fetchHosts();
    
    }, []);

    if(Click){
        return <Redirect to="/hosts" />
    };
    
    return( <div>
        {Hosts.length !== 0 &&( 
        
        <BigBlock>
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
                <SpHeaderA>
                    <HeaderItem>
                    <H2                          
                    onClick={i=>setClick(true)}
                    style={{backgroundColor: bgC}} 
                    onMouseEnter={(e)=> setbgC('rgba(46, 46, 46, 0.777)')} 
                    onMouseLeave={(e)=> setbgC('rgba(32, 142, 161, 0)')}
                >
                 Hosts</H2>
                </HeaderItem>
            </SpHeaderA>
            </DivWBorder>
            <br/>
            <LookHostBox>
                <SlideShadowBox></SlideShadowBox>
                <LookBtn>
                    <div>
                        <Carousel
                            animationSpeed={1500}
                            slidesPerPage={num}
                            offset={50}
                            slidesPerScroll={scNum}
                            arrows
                        >
                            {Hosts.map((host, key) => (
                                <SliderFiller
                                    key={key} id={host.id} userName={host.user_name}
                                    title={host.title} pImg={host.p_img} bImg={host.b_img}
                                />
                            ))}
                        </Carousel> 
                    </div>
                </LookBtn>   
            </LookHostBox>
        </BigBlock>)}
        </div>
    )
}

export default Hosts;