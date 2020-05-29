import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock,SpDiv, VFrame,H3,H2, ProTextBox} from "../../styles/homeStyle";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import SignUp from "./signUp";
import HostsBlock from "../../componets/homeHosts";
import ShowsBlock from "../../componets/homeShows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function Home (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();
    const matches = useMediaQuery('(min-width:600px)');
    return(
        <SpDiv> 
            {/* Intro Block */}
            <IntroBlock  BDcolor="rgba(66, 83, 94, 0.777)">
                    {/* <IntroTxTDiv> */}
                    <VFrame src="https://player.vimeo.com/video/412924050" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></VFrame>
                    <ProTextBox>
                        <H3>This is how the world starts!</H3>
                        <H3>This is how the world starts!</H3>
                        <H3>This is how the world starts!</H3>
                        <H2> Not with a bang but with a whimsy.</H2>
                    </ProTextBox>    
                        
                       
                           
                        {/* <CCCDiv>
                            <ProTextBox>
                                <H1>ADVENTREON</H1>
                            </ProTextBox>
                            <br/>
                            <iframe 
                            title="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            width={ matches ? "840" :"400"}
                            height={ matches ? "472.5" : "275"}
                            src="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </CCCDiv> */}
                        
                        {/* {!isAuthenticated && (
                            <Link to="/signup"><MarronBtn>Sign-up here.</MarronBtn></Link>
                        )}
                        {isAuthenticated && isUser &&(
                            <Link to="/shows"><MarronBtn>Watch now
                                .</MarronBtn></Link>
                        )}
                        {isAuthenticated && isHost &&(
                            <Link to="/"><MarronBtn>View Your shows.</MarronBtn></Link>
                        )}
                        {isAuthenticated && isManager &&(
                            <Link to="/"><MarronBtn>View Your shows.</MarronBtn></Link>
                        )} */}
                        
                        
                    {/* </IntroTxTDiv> */}
            </IntroBlock>
            
              {/* Hosts area */}
            <HostsBlock/>
            {/* Shows area */}
            <ShowsBlock/>
          
        
        </SpDiv>
    )
}

export default Home; 