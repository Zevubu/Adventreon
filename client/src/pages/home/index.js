import React from "react";
import {Link} from 'react-router-dom'
import {IntroBlock, MarronBtn, CCCDiv, FillerDiv, IntroTxTDiv,H1,P} from "../../styles/homeStyle"
// import SignUp from "./signUp";
import Coaches from "../../componets/homeHosts";
import Services from "../../componets/homeShows";
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
                            <H1>Intimacy Coaching</H1>
                            <P>Learn copy copy copy stuff tagline.</P>
                        </CCCDiv>
                        {!isAuthenticated && (
                            <Link to="/signup"><MarronBtn>Sign-up to Make an Appointment.</MarronBtn></Link>
                        )}
                        {isAuthenticated && isUser &&(
                            <Link to="/shows"><MarronBtn>Watchhows.</MarronBtn></Link>
                        )}
                        {isAuthenticated && isHost &&(
                            <Link to="/"><MarronBtn>View Your shows.</MarronBtn></Link>
                        )}
                        
                    </IntroTxTDiv>
            </IntroBlock>
            {/* service area */}
            <Services/>
            {/* Coaches area start */}
            <Coaches/>
             {/* Sign up form
            <SignUp/> */}
        </div>
    )
}

export default Home;