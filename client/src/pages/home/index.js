import React from "react";
import {Link} from 'react-router-dom'
import {IntroBlock, MarronBtn, CCCDiv, FillerDiv, IntroTxTDiv,H1,P} from "../../styles/homeStyle"
// import SignUp from "./signUp";
import HostsBlock from "../../componets/homeHosts";
import ShowsBlock from "../../componets/homeShows";
import { useAuth, useUser, useHost, useManagment } from "../../context/heart"

function Home (){
    const {isAuthenticated} = useAuth();
    const {isUser} = useUser();
    const { isHost } = useHost();
    const { isManager } = useManagment();

    return(
        <div> 
            {/* Intro Block */}
            <IntroBlock>
                <FillerDiv/>
                    <IntroTxTDiv>
                        <CCCDiv>
                            <H1>Cantina</H1>
                            <P>A site we made for you.</P>
                        </CCCDiv>
                        {!isAuthenticated && (
                            <Link to="/signup"><MarronBtn>Sign-up here.</MarronBtn></Link>
                        )}
                        {isAuthenticated && isUser &&(
                            <Link to="/shows"><MarronBtn>Watch now
                                .</MarronBtn></Link>
                        )}
                        {isAuthenticated && isHost &&(
                            <Link to="/"><MarronBtn>View Your shows.</MarronBtn></Link>
                        )}
                        
                    </IntroTxTDiv>
            </IntroBlock>
            {/* Hosts area start */}
            <HostsBlock/>
            {/* Shows area */}
            <ShowsBlock/>
        
        </div>
    )
}

export default Home; 