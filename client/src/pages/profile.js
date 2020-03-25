import React, { useState, useEffect, useContext } from "react";
import { useParams} from "react-router";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import API from "../../API/loggedOutAPI";
import {P, PS,PM, Btn, H1NB, H3, BlueHeaderC,H2,DivWBorder} from "../styles/homeStyle"
import{ProviderBox, AppBox, ProTextBoxN, ProDuoServiceBlock, ProDuoServiceBlockColumn, ProTextBox} from '../styles/providerStyles'
import {UserInfoContext} from "../context/heart" 

function UserInfo(props){
    // const {value} = props
    // const [userInfo, setUserInfo] = useState(value);
    const { userData } = useContext(UserInfoContext)
    console.log(`profile user data: ${JSON.stringify(userData.user_name)}`)
//  user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig
    return(

        <div>
            <BlueHeaderC>
                <H2>About You</H2>
                <PS>Only you can see this profile</PS>
            </BlueHeaderC>
            <ProviderBox>
                <ProDuoServiceBlockColumn>
                    <ProTextBoxN>
                        <H1NB>{userData.user_name}</H1NB>
                    </ProTextBoxN>
                    <ProTextBox>
                        <H3>About</H3>
                        <br/>
                        <P>{userData.about}</P> 
                    </ProTextBox> 
                    {/* <ProTextBox>
                        
                        appointments[0]id, [1]other_paricipant_id ,[2]ServiceName, [3]OPName:name, [4]date:date, [5]time:time},
                        {userData.appointments.split(',').map((appointment, key) =>(
                           <DivWBorder>
                                <AppBox id={appointment.split('.')[0]} >
                                    <PM>{appointment.split('.')[2]} With {appointment.split('.')[3]}</PM>
                                    <P>@ {appointment.split('.')[4]}, {appointment.split('.')[5]}</P>
                                </AppBox>
                                <ProDuoServiceBlockColumn id={appointment.split('.')[1]} >
                                    
                                </ProDuoServiceBlockColumn>
                                <ProDuoServiceBlockColumn id={appointment.split('.')[0]} >
                                    
                                </ProDuoServiceBlockColumn>
                            </DivWBorder>
                        ))}
                    </ProTextBox>
                    <ProDuoServiceBlock>
                    <a className="nav-link" href="/userDataes"><Btn>Book with {userData.user_name}</Btn></a>
                    </ProDuoServiceBlock> */}
                </ProDuoServiceBlockColumn>
                
            </ProviderBox>
        </div>             
    )
}

export default UserInfo;