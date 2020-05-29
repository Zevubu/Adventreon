import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock,SpDiv, VFrame, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2,ProTextBox} from "../../styles/homeStyle";
// import SignUp from "./signUp";
import HostsBlock from "../../componets/CP_fillers/muse_home_hs/muse_host";
import ShowsBlock from "../../componets/CP_fillers/muse_home_hs/muse_shows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function MusicHome (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <SpDiv BGcolor="linear-gradient(to bottom, rgba(23, 23, 23, 1) 25%, rgba(223, 223, 223, 0.777) 46%, rgba(23, 23, 23, 0.777) 56%, rgba(223, 223, 223, 0.777) 100%)"> 
            {/* Intro Block */}
            <IntroBlock AlignI='flex_start' FlexD="column" JustifyC='space-evenly' color="rgba(0, 0, 0, 0.938)" bgImg="https://images.unsplash.com/photo-1579090423747-52a4ff1a6a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=997&q=80">
                <FillerDiv/>
                    <IntroTxTDiv>
                        <CCCDiv>
                            <ProTextBox>
                                <H1 color="rgba(0, 0, 0, 0.938)" TSColor="rgb(233, 233, 232)">Auditory Stimulation</H1>
                                <H2 color="rgba(0, 0, 0, 0.938)" TSColor="rgb(233, 233, 232)">& other delights</H2>
                            </ProTextBox>
                            <VFrame
                            title="https://www.youtube.com/embed/EEIk7gwjgIM"  
                            src="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen/>
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