import React, { useState, useEffect} from "react";
import { BigBlock,LookBox,LookBtn,SlideShadowBox, SpHeaderA, DivWBorder,H2, HeaderItem} from "../../../styles/homeStyle";
import { Redirect } from "react-router-dom";
import API from "../../../API/loggedInAPI";
import SliderFiller from "../../ShowFiller/slide_filler";
import Carousel from '@brainhubeu/react-carousel';
import '../../../styles/Carousel.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Shows (props){
    const [shows, setShows] = useState([]);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const num = matches ? 5 : 1
    const scNum = matches ? 4 : 1
    const token = window.localStorage.getItem('tokens');

    useEffect(() => {
        const fetchShows = async () =>{
            const result = await API.getShowCateg(token,{
                'category':props.Cat,
            }).catch(e=>console.log(e))
                // console.log(`${props.Cat} show Status ${result.status}`)
            if(result.status === 200){
                if(result.data.valid === true){
                    setShows(result.data.shows) 
                } 
            }
        };
        fetchShows();
    }, []);

    if(Click){
        const Desination = `/${props.Cat}`
        return <Redirect to={Desination} />
    }
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
                                    onMouseLeave={(e)=> setbgC('rgba(0, 0, 0, 0)')}
                                >{props.Name}</H2>
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
                                                key={key} id={show.id} showName={show.show_name}
                                                imgP={show.img} imgB={show.img_b} hostName={show.host_name}
                                                price={show.price} ETPlus={show.eighteen_plus} 
                                                paid={show.paid} timeStamp={show.time_stamp}
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