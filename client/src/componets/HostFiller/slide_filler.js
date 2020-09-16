import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import { PB, H2, H3} from "../../styles/homeStyle"
import{ Slide, SlideBuffer,SliderFiller,SlideImg, DuoServiceBlockColumn, DuoServiceBlockRow, Image, TextBox} from '../../styles/providerStyles'
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

// function holdingBox (props){
//     return(
//         <ServiceBlock>
            
//         </ServiceBlock>
//     )
// }

function SlideFiller(props){
    // const [vis, setVis] = useState(1);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);

    if(Click){
        return <Redirect to={"/hosts/" + props.id} />
    }
        
    // opacity: vis ,
    return(
       
            <Slide id={props.id} onClick={i=>setClick(true)} bgImg="x">
                <SlideBuffer bgImg={props.pImg} style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                        <div><SlideImg bgImg={props.pImg} alt={props.userName}/></div>
    
                        <TextBox>
                            <H2 color="rgba(23,23,23)" TSColor="rgba(232,232,232)">{props.userName}</H2>
                            {/* <PB>{props.title}</PB> */}
                        </TextBox>
                        {/* <a className="nav-link" style={{textDecoration: 'none'}} href={"/hosts/" + props.id}><Button variant='contained'>View {props.userName}'s profile</Button></a> */}
                    
                </SlideBuffer>
                
            </Slide>
             
        
        // <Slide id={props.id} style={{backgroundImage: `url(${props.bImg})` }} > 
        //     <TextBox style={{opacity: vis ,backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
        //         <H2 >{props.userName}</H2>
        //         <PB>{props.title}</PB>
        //         <a className="nav-link" style={{textDecoration: 'none'}}href={"/hosts/" + props.id}><Button variant="outline">View {props.userName}'s profile</Button></a>
        //     </TextBox>
            
            
        // </Slide>
    )
}
export default SlideFiller


