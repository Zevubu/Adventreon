import React, {useContext, useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import API from "../../../API/managmentAPI";

import {DivWBorder, MarronHeader,BigMarronBtn,ProTextBox, H1,H2, PT, PS} from "../../../styles/homeStyle";
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../../styles/signUpOutStyles";







function DelShow (){

    const[user, setUser] = useState();
    const[users, setUsers] = useState([]);
    const[show, setShow] = useState();
    const[shows, setShows] = useState([]);
    const[usSelect, setUsSelect] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm();
    const token = window.localStorage.getItem('tokens');
    
    const userOnChange = (userData) =>{
        setUser(userData);
        setUsSelect(true);

    }


    const fetchUsers = async () =>{
        const result = await API.getAllUsersSm(token);
        // console.log(`Users:${JSON.stringify(result.data)}`)
        setUsers(result.data)
    };

    useEffect(()=>{
        fetchUsers();
    },[])

    if(user && usSelect){
        const fetchShows = async (id) =>{
            const result = await API.getAllShowsByUId(`${users[user].id}`,token);
            // console.log(`Shows length:${JSON.stringify(result.data.length)}`)
            setUsSelect(false)
            setShows(result.data)

        };
        fetchShows();
    };

    // show all shows with out hosts function.  
    
    // show all shows that aren't varifide.

    // auto pull with use effect all host and managers.


    // get shows by host function;

    // delete show function. 


    return(
        <DivWBorder>
            <MarronHeader>
                <H1 color="red">Show Deletion page.</H1>
            </MarronHeader>
            <FormBigBox>
                <H2>Testing!</H2>
               {/* List of all host and managers */}
               <FormBoxWError>
                    <PT>Select a host to see shows</PT>
                    <select name="UserChoice" onChange={e=> userOnChange(e.target.value)} ref={register({required:true})}>
                        <option>Choose one</option>
                        {users.map((_user, key) =>(
                            <option
                            key={key}
                            value={key}
                        >#{_user.id} {_user.user_name} ({_user.user_type})</option>
                        ))}
                    </select>
                </FormBoxWError>
                {/* Or view all shows with out hosts. button */}
                {shows && user && !usSelect && (
                    <FormBoxWError>
                    <PT>Select a show</PT>
                        <select name="ShowChoice" onChange={e => setShow(e.target.value)} ref={register({required: true})}>
                            <option>Choose one</option>
                            {shows.map((show, key) => (
                                <option 
                                key={key}
                                value={key}
                                >{show.show_name}</option>
                            ))}
                        </select>
                        {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
                    </FormBoxWError>
                    // the show you choose is episodicle. Please remember to either change the show you episode belongs to or delete them.   
                    
                )}
                {show && (
                    <FormBigBox>
                        <h2>#{shows[show].id} {shows[show].show_name}</h2>
                        <ProTextBox BGcolor="rgba(0,0,0,0)">
                            <h2>These two should be the same:</h2>
                                    <h2>Host by User</h2>
                                    <h2>#{users[user].id} {users[user].user_name}</h2>
                                    <h2>Host by Show</h2>
                                    <h2>#{shows[show].host_id} {shows[show].host_name}</h2>
                        </ProTextBox>
                        <h2>Show type: {shows[show].show_type}</h2>
                        {shows[show].show_type === "episodical" && (
                            <H2 color="red">This show is episodicle. All episodes associated with this show will be deleted as well.</H2>
                        )}
                        <h2>Category({shows[show].category})  Sub-category({shows[show].sub_category})</h2>
                        <h2>About: {shows[show].about}</h2>

                        <FormLittleBox>
                            <FormBox>
                                <img src={shows[show].img} alt="Primary img" width="250"/>
                            </FormBox>
                            <FormBox>
                                <img src={shows[show].img_b} alt="Background img" width="250"/>
                            </FormBox>
                        </FormLittleBox>
                        <iframe 
                                        src={shows[show].v_link}
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen> 
                                    </iframe>
                    </FormBigBox>
                )}

               {/* List of said H/M shows */}

               {/* Show details */}

               {/* delete show button */}




            </FormBigBox>

        </DivWBorder>
    )
}

export default DelShow;