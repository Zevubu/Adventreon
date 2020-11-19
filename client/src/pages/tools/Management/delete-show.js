import React, {useContext, useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import API from "../../../API/managmentAPI";

import {DivWBorder, MarronHeader,ProTextBox, H1,H2, PT} from "../../../styles/homeStyle";
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, PE} from "../../../styles/signUpOutStyles";







function DelShow (){
    const[user, setUser] = useState();
    const[users, setUsers] = useState([]);
    const[show, setShow] = useState();
    const[shows, setShows] = useState([]);
    const[Error, setError] = useState();
    const[ToMany, setToMany] = useState();
    const[Success, setSuccess] = useState();
    const[usSelect, setUsSelect] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const token = window.localStorage.getItem('tokens');
    
    const ShowReset = () =>{
        setShows([]);
        setShow();
    };

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

 

    const fetchShows = async (id) =>{
        const result = await API.getAllShowsByUId(`${users[user].id}`,token);
        // console.log(`Shows length:${JSON.stringify(result.data.length)}`)
        setUsSelect(false)
        setShows(result.data)

    };

    const PageReseter = () =>{
            ShowReset();
            fetchShows();
            setSuccess();
            setError()
        }

    if(user && usSelect){
        fetchShows();
    };

    // show all shows with out hosts function.  
    
    // show all shows that aren't varifide.

    // auto pull with use effect all host and managers.


    // get shows by host function;

    // delete show function. 
    const resHandler = (res) =>{
        console.log(res.data)
        if(res.data.affectedRows === 0){
            console.log("Failed to delete profile");
            setError(true);
            setSuccess(false);
        }
        else if(res.data.affectedRows === 1){
            setSuccess(true);
            setError(false);
        } else if(res.data.affectedRows > 1){
            setSuccess(false);
            setToMany(true);
        }
        else{
            setError(true);
        }
    }

    const ErrHandling =(err)=>{
        console.log(err);
        console.log(errors)
        setError(true);  
    };

    const OnDeleteSubmit = (e) =>{
        const UserDel = () =>{
             API.deleteShow(token,{
                "id":shows[show].id
            })
            .then(res=>resHandler(res))
            .catch(err => ErrHandling(err));
        }
        UserDel()
    };


    return(
        <DivWBorder>
            <MarronHeader>
                <H1 color="red">Show Deletion page.</H1>
            </MarronHeader>
            <FormBigBox>
                <H2 color="red">WARNING!!!</H2>
                <H2 color="red">You are about to delete a show!</H2>
               {/* List of all host and managers */}
                {Error && (
                    <FormBox>
                        <MarronHeader>
                            <H1 color="black">Something went wrong</H1>
                        </MarronHeader>
                        <Btn onClick={PageReseter}>Click here to reset page and try again</Btn>
                    </FormBox>
                )}
                {Success && (
                    <FormBox>
                        <MarronHeader>
                            <H1>{users[user].user_name}'s show "{shows[show].show_name}" has been deleted</H1>
                        </MarronHeader>
                        <Btn onClick={PageReseter}>Delete another show</Btn>
                    </FormBox>
                )}

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
                {!Success && !Error &&( 
                    <div>   
                        {/* Or view all shows with out hosts. button */}
                        {shows && user && !usSelect && (
                            <FormBoxWError>
                                {/* List of said H/M shows */}
                                <PT>Select a show</PT>
                                <select name="ShowChoice" onChange={e => setShow(e.target.value)} ref={register({required: true})}>
                                    <option>Choose one</option>
                                    {shows.map((show, key) => (
                                        <option 
                                        key={key}
                                        value={key}
                                    >#{show.id} {show.show_name}</option>
                                    ))}
                                </select>
                                {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
                            </FormBoxWError>
                            // the show you choose is episodicle. Please remember to either change the show you episode belongs to or delete them.   
                        )}
                        {ToMany && (
                            <FormBox>
                                <MarronHeader>
                                    <H1 color="black">Something went really wrong!</H1>
                                </MarronHeader>
                                <h2>Looks like you deleted more then one show... which shouldn't be possible.</h2>
                            </FormBox>
                        )}
                        {show && (
                            <FormBigBox onSubmit={handleSubmit(OnDeleteSubmit)}>
                                {/* Show details */}
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
                                {!ToMany && (
                                    <FormBox>{/* delete show button */}
                                        <Btn type="submit" value="Submit">Delete Chosen Show</Btn>
                                    </FormBox>
                                )}
                                {ToMany && (
                                    <FormBox>
                                        <MarronHeader>
                                            <H1 color="black">Something went really wrong!</H1>
                                        </MarronHeader>
                                        <h2>Looks like you deleted more then one Show... which shouldn't be possible.</h2>
                                        <h2>What Did you do?</h2>
                                    </FormBox>
                                )}
                            </FormBigBox>
                        )}
                    </div>
                )}
            </FormBigBox>
        </DivWBorder>
    )
}

export default DelShow;