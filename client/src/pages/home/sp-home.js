import React from "react";
// import {Link} from 'react-router-dom'
import {IntroBlock,SpDiv, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2,P,ProTextBox} from "../../styles/homeStyle";
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
        <SpDiv BGcolor="rgba(231, 222, 230, 0.867)">
            {/* Intro Block */}
            <IntroBlock bgImg="https://images.unsplash.com/photo-1494783435443-c15feee0a80a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80">
                <FillerDiv/>
                    <IntroTxTDiv>
                        <CCCDiv>
                            <ProTextBox>
                                <H1 color="rgb(233, 233, 232)">Spirtual Respite</H1>
                                <H2 color="rgb(23, 283, 232)">All creeds and practices are welcome</H2>
                                <P color="rgb(233, 233, 232)"> Except for those who wish to do harm</P>
                            </ProTextBox>
                            {/* <iframe 
                            title="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/EEIk7gwjgIM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe> */}
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

export default SpirtHome; 