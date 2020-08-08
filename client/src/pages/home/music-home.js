import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBox, IntroBlock,SpDiv, VFrame, CCCDiv, FillerDiv, IntroTxTDiv,A,H1,H2,H3,ProTextBox} from "../../styles/homeStyle";
// import SignUp from "./signUp";
import HostsBlock from "../../componets/CP_fillers/base_filler/host_cat"
import ShowsBlock from "../../componets/CP_fillers/muse_home_hs/muse_shows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function MusicHome (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <SpDiv> 
            {/* Intro Block */}
            <IntroBox bgImg="https://images.unsplash.com/photo-1579090423747-52a4ff1a6a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=997&q=80">
                <IntroBlock AlignI='flex_start' FlexD="column" JustifyC='space-evenly'>
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
                    </IntroTxTDiv>
                </IntroBlock>
                <div>
                    <H3>Image by <A href="https://unsplash.com/@hanneskrupinski">Johannes Krupinski</A></H3>
                </div>
            </IntroBox>
            {/* Hosts area start */}
            <ShowsBlock/>

            <HostsBlock Cat="music"/>
            {/* Shows area */}
        
        </SpDiv>
    )
}

export default MusicHome; 