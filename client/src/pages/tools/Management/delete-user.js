import React, {useState, useEffect} from "react";
import API from "../../../API/managmentAPI";
import {DivWBorder, MarronHeader,H1, H2, PT,} from "../../../styles/homeStyle";
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, } from "../../../styles/signUpOutStyles";
import {useForm} from 'react-hook-form';
// May need to add a compare your id and the options id to exclude you. 

function DelUser (){
    const[users, setUsers] = useState([]);
    const[user, setUser] = useState();
    const[Error, setError] = useState();
    const[ToMany, setToMany] = useState();
    const[Success, setSuccess] = useState();
    const { register, handleSubmit, errors } = useForm();
    const token = window.localStorage.getItem('tokens');

    const UserReset = () =>{
        setUsers([])
        setUser()
    }

    const fetchUsers = async () =>{
        const result = await API.getAllUsers(token);
        console.log(`Users:${JSON.stringify(result.data)}`)
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
    }

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

    // if(user){
    //     console.log(user)
    // }
    const ErrHandling =(err)=>{
        console.log(err);
        console.log(errors)
        setError(true);  
    };

    const OnDeleteSubmit = (e) =>{
        const UserDel = () =>{
             API.deleteUser(token,{
                "id":users[user].id
            })
            .then(res=>resHandler(res))
            .catch(err => ErrHandling(err));
        }
        UserDel()
    };

    return(
        <DivWBorder>
            <MarronHeader>
                <H1 color="red">User Deletion Page</H1>
            </MarronHeader>
            <FormBigBox>
                <H2 color="red">WARNING!!!</H2>
                <H2 color="red">You are about to delete someone's account!</H2>
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
                            <H1>{users[user].user_name}'s profile has been deleted</H1>
                        </MarronHeader>
                        <Btn onClick={PageReseter}>Delete another profile</Btn>
                    </FormBox>
                )}
                {ToMany && (
                    <FormBox>
                        <MarronHeader>
                            <H1 color="black">Something went really wrong!</H1>
                        </MarronHeader>
                        <h2>Looks like you deleted more then one Profile... which shouldn't be possible.</h2>
                    </FormBox>
                )}
                {/* choose how to search:
                    from list 
                    host/ user,
                    by username or by email */}
                {/* pick user */}
                {!Success && !Error &&(
                    <div>
                        <FormBoxWError>
                            <PT>Select a user to delete</PT>
                            <select name="UserChoice" onChange={e=> setUser(e.target.value)} ref={register({required:true})}>
                                <option>Choose one</option>
                                {users.map((_user, key) =>(
                                    <option
                                    value={key}
                                >#{_user.id} {_user.user_name} ({_user.user_type})</option>
                                ))}
                            </select>
                        </FormBoxWError>
                        {user && (
                            <div>
                                {/* autogenorate form with user picked info */}
                                <FormBigBox onSubmit={handleSubmit(OnDeleteSubmit)}>
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
                                            <Btn type="submit" value="Submit">Delete Chosen User</Btn>
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
                </div>
             )}               
            </FormBigBox>

        </DivWBorder>
    )
}

export default DelUser;