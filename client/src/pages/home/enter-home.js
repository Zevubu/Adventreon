import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock, CCCDiv, FillerDiv, IntroTxTDiv,H1, H2} from "../../styles/homeStyle"
// import SignUp from "./signUp";
import HostsBlock from "../../componets/homeHosts";
import ShowsBlock from "../../componets/homeShows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function EnterHome (){
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
                            <H1>Adventreon</H1>
                            <H2>Entertainment</H2>
                            <br/>
                            <iframe 
                            title="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            width="560" 
                            height="315" 
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
            {/* Hosts area start */}
            <HostsBlock/>
            {/* Shows area */}
            <ShowsBlock/>
        
        </div>
    )
}

export default EnterHome; 