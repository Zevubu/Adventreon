import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock,SpDiv,VFrame, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2, ProTextBox} from "../../styles/homeStyle";
// import SignUp from "./signUp";
import HostsBlock from "../../componets/CP_fillers/life_home_hs/life_host";
import ShowsBlock from "../../componets/CP_fillers/life_home_hs/life_shows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function MusicHome (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <SpDiv BGcolor="linear-gradient(to bottom, rgba(226, 126, 168, 1) 5%, rgba(46, 46, 46, 0.877) 55%, rgba(32, 142, 161, 0.577) 100%)"> 
            {/* Intro Block */}
            <IntroBlock AlignI='flex_start' FlexD="column" JustifyC='space-evenly' BDcolor="rgba(10, 56, 54, 0.883)" bgImg="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                <FillerDiv/>
                    <IntroTxTDiv >
                        <CCCDiv>
                            <ProTextBox>
                                <H1>Life</H1>
                                <H2>Watch, learn, and listen</H2>
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