import React from "react";
import {IntroBox, IntroBlock, ProTextBox, BigBlock,SpHeaderA,DuoServiceBlock, HeaderItem,A, H3, H2, H1} from "../../styles/homeStyle";
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
            <IntroBox>
                <IntroBlock bgImg=""> 
                    {/* <IntroTxTDiv> */}
                    {/* <VFrame src="https://player.vimeo.com/video/412924050" frameborder="0px" allow="autoplay; fullscreen" allowfullscreen></VFrame> */}
                    <div>
                        <ProTextBox>
                            <H3>Logged out</H3>
                            <H3>This is how the world starts,</H3>
                            <H2>This is how the world starts,</H2>
                            <H1 color="rgb(23, 283, 232)">This is how the world starts,</H1>
                            <H2> Not with a bang but with a whimsy...</H2>
                        </ProTextBox>
                    </div>  
                </IntroBlock>
                <div>
                    <H3>Image by <A href="https://unsplash.com/@ethanchoover">Ethan Hoovers</A></H3>  
                </div>
            </IntroBox>
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

            {/* <Shows/> */}
            
        </div>
    )
}

export default LogoutBody;