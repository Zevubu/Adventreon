import React from "react";
import {IntroBox,VFrame, IntroBlock, ProTextBox, ProImgBox, BigBlock,SpHeaderA,DuoServiceBlock, HeaderItem,A, H3, H2, H1} from "../../styles/homeStyle";
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
                    <VFrame src="https://player.vimeo.com/video/457351669" frameborder="0px" allow="autoplay; fullscreen" allowfullscreen></VFrame>
                    <div>
                        <ProTextBox>
                        <H1 color="rgb(23, 283, 232)">A space for...</H1>
                            <H1 color="rgb(23, 283, 232)">the weird, the whimsical, and the wonderful.</H1>
                            <H2>The haphazard healers of this world.</H2>
                            <H2>You circus folk, musicians, painters, puppeteers, clowns, carnies, and those who love them.</H2>
                            <H2>Welcome.</H2>
                            
                            {/* <H2>A place for immersive experience makers, circus folk, musicians, puppeteers, clowns, carnies, and healers, to name a few.</H2> */}
                            {/* <H2>To entertain, share their skills, and tell their stories.</H2>
                            <H2>All while selling their own content. </H2> */}
                            {/* <H3>Logged out</H3>
                            <H3>This is how the world starts,</H3>
                            <H2>This is how the world starts,</H2>
                            <H1 color="rgb(23, 283, 232)">This is how the world starts,</H1>
                            <H2> Not with a bang but with a whimsy...</H2> */}
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
                    <H2 color="rgb(23, 23, 23)">I have a story to tell.</H2>
                    <H2 color="rgb(23, 23, 23)">It’s a story of loss and whimsey. </H2>
                    <H2 color="rgb(23, 23, 23)">Of a society struggling with it’s own mortality, and the people who work to keep the magic and wonder of the everyday alive and thriving.</H2>
                    <H2 color="rgb(23, 23, 23)">Truth be told it’s not just my story to tell, that honor belongs to the eclectic creators of wonder, whimsy, and absurdity.</H2>
                    </ProTextBox>
                    <ProImgBox bgImg="https://images.unsplash.com/photo-1576544403918-c47d52572a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80">
                        <IntroBlock/>
                        <H3>Image by <A href="https://unsplash.com/@cys_escapes">Cyrus Crossan</A></H3>  
                    </ProImgBox>
                </DuoServiceBlock>
                <DuoServiceBlock>
                    <ProImgBox bgImg="https://images.unsplash.com/photo-1561496306-3a94e96e7a09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
                        <IntroBlock/>
                        <H3>Image by <A href="https://unsplash.com/@karlbewick">Karl Bewick</A></H3>  
                    </ProImgBox>
                    <ProTextBox BGcolor="rgba(0,0,0,0)">
                    <H2 color="rgb(23, 23, 23)">A space for immersive experience designers, circus folk, musicians, puppeteers, clowns, carnies, healers, and the people who love them.</H2>
                    </ProTextBox>
                </DuoServiceBlock>
                <DuoServiceBlock>
                    <ProTextBox BGcolor="rgba(0,0,0,0)">
                        <H2 color="rgb(23, 23, 23)">In a sociaty that consitantly devalues labor, and a culture that's obsesesed with screaming "Get a real job!".</H2>
                        <H2 color="rgb(23, 23, 23)"> We’re here to scream back. Our jobs are as real as they get, And we deserve to get paid for them!</H2>
                    </ProTextBox>
                    <ProImgBox bgImg="https://images.unsplash.com/photo-1597355404305-7112c26fda49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                        <IntroBlock/>
                        <H3>Image by <A href="https://unsplash.com/@intense_sunshine">Olivia Connell</A></H3>  
                    </ProImgBox>
                </DuoServiceBlock>
            </BigBlock>

            {/* <Shows/> */}
            
        </div>
    )
}

export default LogoutBody;