import React from "react";
import {DivWBorder, TriServiceBlock, ServiceBlock, BigBlock, Btn, BlueBtn, MarronBtn, TealBtn,CCCDiv, HoldDiv, BlueHeader, MarronHeader, HeaderItem,TealHeader, H2, P, PS, H3B, H3M, H3T, PG} from "../../styles/homeStyle"
import { Logo } from "../../styles/componentStyles";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function Services (){
    return(
            
        <div> 
            <DivWBorder>
                {/* <a id="services"/> */}
                <TealHeader>
                    <HeaderItem>
                        <Logo>Services</Logo>
                        <a className="nav-link" href="/services" style={{textDecoration: 'none'}}><Button variant="contained" color="secondary">Veiw All</Button></a>  
                    </HeaderItem>
                   
                </TealHeader>
                <ServiceBlock>
                    <TriServiceBlock>
                        <HoldDiv>
                            <Paper style={{width: '100%',height: '100%'}}></Paper>
                        </HoldDiv>
                        <H2>Love Better</H2>
                        <CCCDiv>
                            <P>Dateing Coaching</P>
                            <P>Couple Relationship Coaching</P>
                            <P>Couple Sex Coaching</P>
                        </CCCDiv>
                        <a href="/services" style={{textDecoration: 'none'}}><Button variant="contained" color="Primary">Love Better</Button></a>
                    </TriServiceBlock>
                    <TriServiceBlock>
                        <HoldDiv>
                        <Paper style={{width: '100%',height: '100%'}}></Paper>
                        </HoldDiv>
                        <H2>Touch Better</H2>
                        <CCCDiv>
                            <P>Cuddling Services</P>
                            <P>Kissing Lessons</P>
                            <P>Intimate Touch Coaching</P>
                        </CCCDiv>
                        <a href="/services" style={{textDecoration: 'none'}}><Button variant="contained" color="Primary">love Better Now</Button></a>
                    </TriServiceBlock>
                    <TriServiceBlock>
                        <HoldDiv>
                        <Paper style={{width: '100%',height: '100%'}}></Paper>
                        </HoldDiv>
                        <H2>Feel Better</H2>
                        <CCCDiv>
                            <P>Self-care Coaching</P>
                            <P>Body Positivity</P>
                            <P>Conversation Coaching</P>
                        </CCCDiv>
                        <a href="/services"><Button variant="contained" color="Primary">Be Better Now</Button></a>
                    </TriServiceBlock>
                </ServiceBlock>
            </DivWBorder>
            {/*Service continued  */}
            <BigBlock>
            {/* Love Better, Blue */}
                <DivWBorder>
                    <BlueHeader>
                        {/* first half of stament Bold italic */}
                        <H2>Become a better lover</H2>
                    </BlueHeader>
                    <ServiceBlock>
                        <TriServiceBlock>
                            <H3B>Dating</H3B>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3B>Relationships</H3B>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3B>Sex</H3B>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                    </ServiceBlock>
                </DivWBorder>
                {/* Touch Better, Maroon */}
                <DivWBorder>
                    <MarronHeader>
                        {/* first half of stament Bold italic */}
                        <H2>Enhance Your Intimacy skills</H2>
                    </MarronHeader>
                    <ServiceBlock>
                        <TriServiceBlock>
                            <H3M>Cuddling</H3M>
                            <PG>Lessons</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3M>Kissing</H3M>
                            <PG>Lessons</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3M>Intimate Touch</H3M>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                    </ServiceBlock>
                </DivWBorder>
                {/* Be Better, Teal */}
                <DivWBorder>
                    <TealHeader>
                        {/* first half of stament Bold italic */}
                        <H2>Grow your confidence and social skills</H2>
                    </TealHeader>
                    <ServiceBlock>
                        <TriServiceBlock>
                            <H3T>Self Care</H3T>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3T>Body Positivity</H3T>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                        <TriServiceBlock>
                            <H3T>Conversation</H3T>
                            <PG>Coaching</PG>
                            <PS>Filler fifjn ufda hsf usdha<br/>
                                jfild sjfiod safi osdhaj hfdisa fsdahflsa<br/>
                                hfsdfjd ioash fdslahf jfsklah 
                            </PS>
                            <Button variant='outlined' color="secondary">
                                Learn More
                            </Button>
                        </TriServiceBlock>
                    </ServiceBlock>
                </DivWBorder>
            </BigBlock>  
        </div>
    )
}

export default Services;