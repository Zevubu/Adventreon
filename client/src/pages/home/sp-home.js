import React from "react";
import {IntroBox, IntroBlock,SpDiv, CCCDiv, FillerDiv, IntroTxTDiv,H1,H2,H3,P,ProTextBox} from "../../styles/homeStyle";
import HostsBlock from "../../componets/CP_fillers/base_filler/host_cat"
import ShowsBlock from "../../componets/CP_fillers/sp_home_hs.js/sp_shows";

function SpirtHome (){
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
                <div>
                    <H3>Image by <a href="https://unsplash.com/@diegojimenez">Diego Jimenez</a></H3>
                </div>
            </IntroBox>
            <ShowsBlock/>
             {/* Shows area */}
            <HostsBlock Cat="spiritual"/>
            {/* Hosts area start */}
        
        </SpDiv>
    )
}

export default SpirtHome; 