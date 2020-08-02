import React from "react";
import { IntroBlock, VFrame, ProTextBox, BigBlock,BigBlockR,SpHeaderA,DuoServiceBlock, HeaderItem, H3, H2, H1} from "../../styles/homeStyle";
// import { Redirect } from "react-router-dom";
// , { useState} 

import Shows from "./shows/index"

function LogoutBody (){
      // const [Click, setClick] = useState(false);
    // if(Click){
    //     return <Redirect to="/shows" />
    // }
    return(
        <div>
            <IntroBlock>
                    {/* <IntroTxTDiv> */}
                    <VFrame src="https://player.vimeo.com/video/412924050" frameborder="0px" allow="autoplay; fullscreen" allowfullscreen></VFrame>
                    <ProTextBox>
                        <H3>Logged out</H3>
                        <H3>This is how the world starts,</H3>
                        <H2>This is how the world starts,</H2>
                        <H1 color="rgb(23, 283, 232)">This is how the world starts,</H1>
                        <H2> Not with a bang but with a whimsy...</H2>
                    </ProTextBox>    
            </IntroBlock>
            <BigBlock>
                <SpHeaderA>
                    <HeaderItem>
                        <H2>Welcome</H2>
                    </HeaderItem>
                </SpHeaderA>
                <DuoServiceBlock>
                    <ProTextBox BGcolor="rgba(0,0,0,0)">
                        <H2 color="rgb(23, 23, 23)">A place to witness, and enjoy the skills of the theatrical, musical, makers, dancers, acrobats, entertainers, and other beautiful oddities that are often swept aside. </H2>
                    </ProTextBox>
                    <ProTextBox BGcolor="rgba(0,0,0,0)">
                        <H2 color="rgb(23, 23, 23)"> And some such filler</H2>
                    </ProTextBox>
                </DuoServiceBlock>
            </BigBlock>

            <Shows/>
            
        </div>
    )
}

export default LogoutBody;