import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock,SpDiv, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2,P} from "../../styles/homeStyle"
// import SignUp from "./signUp";
import HostsBlock from "../../componets/CP_fillers/perf_home_hs/perf_host";
import ShowsBlock from "../../componets/CP_fillers/perf_home_hs/perf_shows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function MusicHome (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <SpDiv  BGcolor="linear-gradient(to bottom, rgba(155, 51, 74, 0.938) 25%, rgba(23, 23, 23, 0.777) 56%, rgba(223, 223, 223, 0.777) 100%)"> 
            {/* Intro Block */}
            <IntroBlock  BDcolor="rgba(255, 187, 0, 1)" bgImg=" https://images.unsplash.com/photo-1542675454-b3fbb8b41c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80">
                <FillerDiv/>
                    <IntroTxTDiv>
                        <CCCDiv>
                            <H1>Performance</H1>
                            <H2>This world's full of some wonderfully odd people, isn't it?</H2>
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
            <ShowsBlock/>

            <HostsBlock/>
            {/* Shows area */}
        
        </SpDiv>
    )
}

export default MusicHome; 