import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,LookTextBox,LookHostBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../../API/loggedOutAPI";

import SliderFiller from "../../HostFiller/slide_filler";

import Carousel from '@brainhubeu/react-carousel';
import '../../../styles/Carousel.css';
// import '@brainhubeu/react-carousel/lib/style.css';
// import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
 

function Hosts (){ 
    const [Hosts, setHosts] = useState([]);
    // const [vis, setVis] = useState(1);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    
    useEffect(() => {
       const fetchHosts = async () =>{
        const result = await API.getLifeHosts()
            console.log(`life host data ${result.status}`)
            setHosts(result.data)
        };
        fetchHosts(); 
    }, []);

    if(Click){
        return <Redirect to="/hosts" />
    }
    
// opacity: vis ,
    return(
        <div>
        {Hosts.length !== 0 &&( 
        
        <BigBlock>
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            {/* <a id="Hosts"/> */}
            {/* <DivWBorder style={{marginBottom: '100px'}}> */}
            <DivWBorder BDcolor="rgba(24, 129, 50, 0.938)">
                <SpHeaderA BGcolor="rgba(22, 18, 83, 0.477)">
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
                <LookTextBox FdColor="rgba(226, 126, 168, 1)"></LookTextBox>
                <LookBtn>
                    <div>
                        <Carousel
                            // autoPlay={5000}
                            animationSpeed={1500}
                            slidesPerPage={num}
                            offset={50}
                            slidesPerScroll={scNum}
                            arrows
                            infinite
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
            {/* </DivWBorder> */}
        </BigBlock>)}
        </div>
    )
}

export default Hosts;