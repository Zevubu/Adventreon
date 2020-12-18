import React from "react";
import {IntroBox, IntroBlock,SpDiv,VFrame, CCCDiv, FillerDiv, IntroTxTDiv,A,H1,H2,H3, ProTextBox} from "../../styles/homeStyle";
import HostsBlock from "../../componets/CP_fillers/base_filler/host_cat"
import ShowsBlock from "../../componets/CP_fillers/life_home_hs/life_shows";

function MusicHome (){
    return(
        <SpDiv> 
            {/* Intro Block */}
            <IntroBox bgImg="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                <IntroBlock AlignI='flex_start' FlexD="column" JustifyC='space-evenly' >
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
                        </IntroTxTDiv>
                </IntroBlock>
                <div>
                    <H3>Image by <A href="https://unsplash.com/@jbcreate_">Joseph Barrientos</A></H3>
                </div>
            </IntroBox>
            <ShowsBlock/>
            {/* Shows area */}
            <HostsBlock Cat="life"/>
            {/* Hosts area start */}
        </SpDiv>
    )
}

export default MusicHome; 