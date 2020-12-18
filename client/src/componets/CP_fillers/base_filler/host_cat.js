import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,SlideShadowBox,LookHostBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../../API/loggedInAPI";
import SliderFiller from "../../HostFiller/slide_filler";
import Carousel from '@brainhubeu/react-carousel';
import '../../../styles/Carousel.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Hosts (props){ 
    const [Hosts, setHosts] = useState([]);
    const [pullSwith, setPullSwitch] = useState(false);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    const token = window.localStorage.getItem('tokens');
    
    useEffect(() => {
        const fetchHostCNT = async () =>{
            console.log(`Props host category test:${props.Cat}`)
            const count = await API.getHostCatNumCheck(token,props.Cat)
             // console.log(`Spirit Host count #${JSON.stringify(count.data.total)} true false check:${count.data.total !== 0}`)
            if(count.data.total !== 0){
                setPullSwitch(true)
                // console.log(`Spirit host confirm check`)
            }
            else{
                // console.log(`Spirit host fail check`)
                return
            }
        }
        fetchHostCNT()  
    }, []);

    if(pullSwith){
        const fetchHosts = async () =>{
            const result = await API.getHostByCat(token,{
                'category':props.Cat
            })
            // console.log(`Spirit pull switch check`)
            setHosts(result.data)
        };
        setPullSwitch(false)
        fetchHosts();
    }

    if(Click){
        return <Redirect to="/hosts" />
    }
    
    return(
        <div>
        {Hosts.length !== 0 &&( 
        <BigBlock>
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
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