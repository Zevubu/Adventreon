import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock, CCCDiv, FillerDiv, IntroTxTDiv,H1, ProTextBox} from "../../styles/homeStyle";

// import SignUp from "./signUp";
import HostsBlock from "../../componets/homeHosts";
import ShowsBlock from "../../componets/homeShows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function Home (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <div> 
            {/* Intro Block */}
            <IntroBlock>
                <FillerDiv/>
                    <IntroTxTDiv>

                        <CCCDiv>
                            {/* <ProTextBox>
                                <H1>ADVENTREON</H1>
                            </ProTextBox>
                            <br/> */}
                            <iframe 
                            title="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            width="840" 
                            height="472.5" 
                            src="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </CCCDiv>
                        
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
                        
                        
                    </IntroTxTDiv>
            </IntroBlock>
            
              {/* Hosts area */}
            <HostsBlock/>
            {/* Shows area */}
            <ShowsBlock/>
          
        
        </div>
    )
}

export default Home; 