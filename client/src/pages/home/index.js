import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBox, IntroBlock,SpDiv, VFrame, A,H3,H2, H1, ProTextBox} from "../../styles/homeStyle";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import SignUp from "./signUp";
import {useAuth} from "../../context/heart"

import LogoutHome from "../../componets/homeLogOut/index"
import HostsBlock from "../../componets/homeHosts";
import ShowsBlock from "../../componets/homeShows";
// import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function Home (){
    const {isAuthenticated} = useAuth();
    // const {isAuthenticated} = useAuth();
    // const {isUser} = useUser();
    // const { isHost } = useHost();
    // const { isManager } = useManagment();465t
    // const matches = useMediaQuery('(min-width:600px)');
    return(
        <SpDiv> 
            {/* Intro Block */}
            {!isAuthenticated && (
                <div>
                    <LogoutHome/>
                </div>
            )}
            {isAuthenticated && (
                <div>
                    <IntroBox>
                        <IntroBlock>
                            {/* <IntroTxTDiv> */}
                            <VFrame src="https://player.vimeo.com/video/457351669" frameborder="0px" allow="autoplay; fullscreen" allowfullscreen></VFrame>
                            <div>
                                <ProTextBox>
                                    <H3>This is how the world starts,</H3>
                                    <H2>This is how the world starts,</H2>
                                    <H1 color="rgb(23, 283, 232)">This is how the world starts,</H1>
                                    <H2> Not with a bang but with a whimsy...</H2>
                                </ProTextBox>
                            </div>  
                            {/* <IntroTxTDiv> */}
                        </IntroBlock>
                        <div>
                            <H3>Image by <A href="https://unsplash.com/@ethanchoover">Ethan Hoovers</A></H3>   
                        </div>
                    </IntroBox>
                    {/* Shows area */}
                    <ShowsBlock/>
                    {/* Hosts area */}
                    <HostsBlock/>
                </div>
            )}
        </SpDiv>
    )
}

export default Home; 