import React, {useState, useEffect} from "react";
import API from "../../../API/managmentAPI";

import {DivWBorder, MarronHeader,H1, H2, PT, PS} from "../../../styles/homeStyle"
import {FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, PE} from "../../../styles/signUpOutStyles"
import {useForm} from 'react-hook-form';

function UpdateUser (){
    const[users, setUsers] = useState([]);
    const[user, setUser] = useState();
    const[Error, setError] = useState();
    const[ToMany, setToMany] = useState();
    const[Success, setSuccess] = useState();
    const[catType, setCatType] = useState();
    const[UserType, setUserType] = useState(); 
    const[UpD, setUpD] = useState()
    const { register, handleSubmit, errors } = useForm();
    const token = window.localStorage.getItem('tokens');

    const UserReset = () =>{
        setUsers([])
        setUser()
    }
    const UserOnChange = (data) =>{
        setUpD()
        setUser(data)
        setUserType(users[data].user_type)
    }
    if(UserType){
        console.log(`UserType check ${UserType}`)
    }

    const fetchUsers = async () =>{
        const result = await API.getAllUsers(token);
        // console.log(`Users:${JSON.stringify(result.data)}`)
        setUsers(result.data)
    };

    useEffect(()=>{
        fetchUsers();
    },[])

    const PageReseter = () =>{
        UserReset();
        fetchUsers();
        setSuccess();
        setError()
        setCatType();
    }

    const ProfilePicker = ()=>{
        setUpD(true)
    }

    return(
        <DivWBorder>
             <MarronHeader>
                <H1 color="red">User Update Page</H1>
            </MarronHeader>
                <H2 color="red">WARNING!!!</H2>
                <H2 color="red">You are about to update someone's account!</H2>
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
                        <H1>{users[user].user_name}'s profile has been updated</H1>
                    </MarronHeader>
                    <Btn onClick={PageReseter}>Update another profile</Btn>
                </FormBox>
            )}
            {ToMany && (
                <FormBox>
                    <MarronHeader>
                        <H1 color="black">Something went really wrong!</H1>
                    </MarronHeader>
                    <h2>Looks like you updated more then one Profile... which shouldn't be possible.</h2>
                </FormBox>
            )}
            {!Success && !Error &&(
                <div>
                      <FormBoxWError>
                            <PT>Select a user to update</PT>
                            <select name="UserChoice" onChange={e=> UserOnChange(e.target.value)} ref={register({required:true})}>
                                <option>Choose one</option>
                                {users.map((_user, key) =>(
                                    <option
                                    value={key}
                                >#{_user.id} {_user.user_name} ({_user.user_type})</option>
                                ))}
                            </select>
                        </FormBoxWError>
                        {user&&!UpD&&(
                            <div>
                                <FormBigBox>
                                    <h2>#{users[user].id} {users[user].user_name}</h2>
                                    <h2>User type: {users[user].user_type}</h2>
                                    <h2>{users[user].first_name} {users[user].last_name}</h2>
                                    {/* <h2>{users[user].dob}</h2> */}
                                    {users[user].user_type === "host" && (
                                        <div>
                                            <FormBox>
                                                <h2>{users[user].title}</h2>
                                                <h2>About:</h2>
                                                <h2>{users[user].about}</h2>
                                                <FormLittleBox>
                                                    <img src={users[user].p_img} alt="Profile img" width="250"/>
                                                    <img src={users[user].b_img} alt="Background img" width="250"/>
                                                </FormLittleBox>
                                            </FormBox>
                                        </div>
                                    )}
                                    {users[user].user_type === "manager" && (
                                        <div>
                                            <FormBox>
                                                <h2>{users[user].title}</h2>
                                                <h2>About:</h2>
                                                <h2>{users[user].about}</h2>
                                                <FormLittleBox>
                                                    <img src={users[user].p_img} alt="Profile img" width="250"/>
                                                    <img src={users[user].b_img} alt="Background img" width="250"/>
                                                </FormLittleBox>
                                            </FormBox>
                                        </div>
                                    )}
                                    {!ToMany && (
                                        <FormBox>
                                            <Btn onClick={ProfilePicker}>Update This Profile</Btn>
                                        </FormBox>
                                    )}
                                    {ToMany && (
                                        <FormBox>
                                            <MarronHeader>
                                                <H1 color="black">Something went really wrong!</H1>
                                            </MarronHeader>
                                            <h2>Looks like you deleted more then one Profile... which shouldn't be possible.</h2>
                                            <h2>What Did you do?</h2>
                                        </FormBox>
                                    )}
                                </FormBigBox>
                            </div>
                        )}
                        {user &&UpD&&(
                            <DivWBorder>
                                {/* <FormBoxWError>
                                     <h2 name="UserNameBase" value={users[user].user_name}>#{users[user].id} {users[user].user_name}</h2>
                                </FormBoxWError> */}
                                <FormBoxWError> 
                                    <PT>Name*</PT>
                                    <Input
                                        name="userName"
                                        ref ={register({required: true})}
                                        defaultValue= {users[user].user_name}
                                    /> 
                                    {errors.userName && errors.userName.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.userName && errors.userName.type === "pattern" &&(<PE>Name can only have letters and numbers</PE>)}
                                </FormBoxWError>
                                <FormBoxWError>
                                    <PT>User Type</PT>
                                    <select 
                                        name="user_type" 
                                        onChange={e => setUserType(e.target.value)}
                                        defaultValue={users[user].user_type}
                                        >
                                        <option>choose one</option>
                                        <option value="user">User</option>
                                        <option value="host">Host</option>
                                        <option value="manager">Manager</option>
                                    </select>
                                    {errors.category && errors.category.type === "required" &&(<PE>This is required!</PE>)} 
                                </FormBoxWError>  
                                {UserType === "manager"&&(     
                                    <FormBoxWError>
                                        <PT>List profile as a host.</PT>
                                        <Input type="checkbox" name="mhswitch" value={true} ref={register} defaultChecked={users[user].mhswitch}/>
                                    </FormBoxWError>
                                )}
                                <FormBoxWError>
                                <PT>Your Title</PT>
                                    <Input
                                        name="title"
                                        ref ={register({required: true })}
                                        defaultValue={users[user].title}
                                    /> 
                                    {errors.title && errors.title.type === "required" &&(<PE>This is required!</PE>)}
                                    {errors.title && errors.title.type === "pattern" &&(<PE>Title must at least 3 characters an no longer than 30. </PE>)}
                                </FormBoxWError>  
                          
                                <FormBoxWError>
                                    <PT>category</PT>
                                    <PS>What category do you want you profile listed under</PS>
                                    <select 
                                        name="category" 
                                        onChange={e => setCatType(e.target.value)}
                                        defaultValue={users[user].category}
                                        >
                                        <option>choose one</option>
                                        <option value="music">Music</option>
                                        <option value="performance">Performance Art</option>
                                        <option value="visual">Visual Art</option>
                                        <option value="life">Life</option>
                                        {/* <option value="spiritual">Spiritual Guidance</option> */}
                                    </select>
                                    {errors.category && errors.category.type === "required" &&(<PE>This is required!</PE>)} 
                                </FormBoxWError>
                             
                           
                                {!ToMany && (
                                    <FormBox>
                                        <Btn type="submit" value="Submit">Update This Profile</Btn>
                                    </FormBox>
                                )}
                                {ToMany && (
                                    <FormBox>
                                        <MarronHeader>
                                            <H1 color="black">Something went really wrong!</H1>
                                        </MarronHeader>
                                        <h2>Looks like you deleted more then one Profile... which shouldn't be possible.</h2>
                                        <h2>What Did you do?</h2>
                                    </FormBox>
                                )}
                            </DivWBorder>
                        )}
                </div>
            )}
        
        </DivWBorder>
    )

}

export default UpdateUser;