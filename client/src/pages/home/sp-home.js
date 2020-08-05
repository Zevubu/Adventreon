import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBox, IntroBlock,SpDiv, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2,H3,P,ProTextBox} from "../../styles/homeStyle";
// import SignUp from "./signUp";
import HostsBlock from "../../componets/CP_fillers/sp_home_hs.js/sp_host";
import ShowsBlock from "../../componets/CP_fillers/sp_home_hs.js/sp_shows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function SpirtHome (){
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();

    return(
        <SpDiv>
            {/* Intro Block */}
            <IntroBox bgImg="https://images.unsplash.com/photo-1494783435443-c15feee0a80a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80">
                <IntroBlock>
                    <FillerDiv/>
                    <IntroTxTDiv>
                        <CCCDiv>
                            <ProTextBox>
                                <H1 color="rgb(233, 233, 232)">Spiritual Respite</H1>
                                <H2 color="rgb(23, 283, 232)">All creeds and practices are welcome</H2>
                                <P color="rgb(233, 233, 232)"> Except for those who wish to do harm</P>
                            </ProTextBox>
                            {/* <VFrame
                            title="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            src="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen/> */}
                        </CCCDiv>
                    </IntroTxTDiv>
                </IntroBlock>
                <a href="https://unsplash.com/@diegojimenez"><H3>Image by Diego Jimenez</H3></a>
            </IntroBox>
            {/* Hosts area start */}
            <ShowsBlock/>

            <HostsBlock/>
            {/* Shows area */}
        
        </SpDiv>
    )
}

export default SpirtHome; 