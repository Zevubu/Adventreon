import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import API from "../../../API/managmentAPI";
import {DivWBorder, MarronHeader, ProTextBox, H1, H2, PT} from "../../../styles/homeStyle";
import { FormBigBox,FormBox,FormBoxWError, Btn, PE} from "../../../styles/signUpOutStyles";

function DelEpi (){
    const[user, setUser] = useState();
    const[users, setUsers] = useState([]);
    const[show, setShow] = useState();
    const[shows, setShows] = useState([]);
    const[epi, setEpi] = useState();
    const[epis, setEpis] = useState([]);
    const[Error, setError] = useState();
    const[ToMany, setToMany] = useState();
    const[Success, setSuccess] = useState();
    const[usSelect, setUsSelect] = useState(false);
    const[shSelect, setShSelect] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const token = window.localStorage.getItem('tokens');
    
    const ShowReset = () =>{
        setShows([]);
        setShow();
    };

    const EpiReset = () =>{
        setEpis([]);
        setEpi();
    };

    const userOnChange = (userData) =>{
        ShowReset();
        EpiReset();
        setUser(userData);
        setUsSelect(true);
    };

    const showOnchange = (showData) =>{
        EpiReset();
        setShow(showData);
        setShSelect(true);
    };

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

    const fetchUsers = async () =>{
        const result = await API.getAllUsersSm(token)
            .catch(err => ErrHandling(err));
        // console.log(`Users:${JSON.stringify(result.data)}`)
        setUsers(result.data)
    };

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchShows = async (id) =>{
        const result = await API.getShowsXEpiUId(`${users[user].id}`,token)
            .catch(err => ErrHandling(err));
        // console.log(`Shows length:${JSON.stringify(result.data.length)}`)
        setUsSelect(false)
        setShows(result.data)
    };

    if(user && usSelect){
        fetchShows();
    };

    const fetchEpis = async () =>{
        const result = await API.getAllEpiXSId(`${shows[show].id}`,token)
            .catch(err => ErrHandling(err));
        console.log(`Epi length:${JSON.stringify(result.data)}`)
        setShSelect(false)
        setEpis(result.data)
    };

    if(show && shSelect){
        fetchEpis()
    }

    const EpiReseter = ()=>{
        EpiReset();
        fetchEpis();
        setSuccess();
        setError();
    }

    const OnDeleteSubmit = (e) =>{
        const EpiDel = () =>{
             API.deleteEpi(token,{
                "id":epis[epi].id
            })
            .then(res=>resHandler(res))
            .catch(err => ErrHandling(err));
        }
        EpiDel()
    };

    return(
        <DivWBorder>
            <MarronHeader>
            <H1 color="red">Episode Deletion page.</H1>
            </MarronHeader>
            <FormBigBox>
                <H2 color="red">WARNING!!!</H2>
                <H2 color="red">You are about to delete an episode!</H2>
                {Error && (
                    <FormBox>
                        <MarronHeader>
                            <H1 color="black">Something went wrong</H1>
                        </MarronHeader>
                        <Btn onClick={EpiReseter}>Click here to reset page and try again</Btn>
                    </FormBox>
                )}
                {Success && (
                    <FormBox>
                        <MarronHeader>
                            <H1>"{users[user].user_name}'s: Episode "{epis[epi].epi_name}" from show "{shows[show].show_name}"has been deleted</H1>
                        </MarronHeader>
                        <Btn onClick={EpiReseter}>Delete another Episode</Btn>
                    </FormBox>
                )}
                {/* choose how to search:
                    from list 
                        host,
                    by username or by email */}
                {/* pick user */}
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
                        {shows && user && !usSelect && (
                            <FormBoxWError>
                                {/* List of said H/M shows */}
                                <PT>Select a show to see episodes</PT>
                                <select name="ShowChoice" onChange={e => showOnchange(e.target.value)} ref={register({required: true})}>
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
                        )}
                        {epis && show && user && !usSelect && !shSelect && (
                            <FormBoxWError>
                                {/* List of said H/M shows */}
                                <PT>Select a show</PT>
                                <select name="EpiChoice" onChange={e => setEpi(e.target.value)} ref={register({required: true})}>
                                    <option>Choose one</option>
                                    {epis.map((Epi, key) => (
                                        <option 
                                        key={key}
                                        value={key}
                                    >#{Epi.id} {Epi.epi_name}</option>
                                    ))}
                                </select>
                                {errors.ShowChoice && errors.ShowChoice.type === "required" &&(<PE>This is required!</PE>)}
                            </FormBoxWError>   
                        )}

                        {ToMany && (
                            <FormBox>
                                <MarronHeader>
                                    <H1 color="black">Something went really wrong!</H1>
                                </MarronHeader>
                                <h2>Looks like you deleted more then one Episode... which shouldn't be possible.</h2>
                            </FormBox>
                        )}
                        {epi && (
                            <FormBigBox  onSubmit={handleSubmit(OnDeleteSubmit)}>
                                <h2>Id #{epis[epi].id}</h2>
                                <h2>#{epis[epi].order} {epis[epi].epi_name}</h2>
                                <ProTextBox BGcolor="rgba(0,0,0,0)">
                                    <h2>These two should be the same:</h2>
                                    <h2>Show by Show</h2>
                                    <h2>#{shows[show].id} {shows[show].show_name}</h2>
                                    <h2>Show by Episode</h2>
                                    <h2>#{epis[epi].show_id} {epis[epi].show_name}</h2>
                                </ProTextBox>
                                <ProTextBox BGcolor="rgba(0,0,0,0)">
                                    <h2>These three should be the same:</h2>
                                    <h2>Host by User</h2>
                                    <h2>#{users[user].id} {users[user].user_name}</h2>
                                    <h2>Host by Show</h2>
                                    <h2>#{shows[show].host_id} {shows[show].host_name}</h2>
                                    <h2>Host by Episode</h2>
                                    <h2>#{epis[epi].user_id} {epis[epi].host_name}</h2>
                                </ProTextBox>
                                <h2>Category({epis[epi].category}) Sub-category({epis[epi].sub_category})</h2>
                                <h2>About: {epis[epi].about}</h2>
                                <FormBox>
                                    <img src={epis[epi].img} alt="Primary img" width="250"/>
                                </FormBox>
                                <iframe 
                                    src={epis[epi].v_link}
                                    title={epis[epi].epi_name}
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen" 
                                    allowfullscreen> 
                                </iframe>
                                {!ToMany && (
                                    <FormBox>
                                        {/* delete button */}
                                        <Btn type="submit" value="Submit">Delete Chosen Show</Btn>
                                    </FormBox>
                                )}
                                {ToMany && (
                                    <FormBox>
                                        <MarronHeader>
                                            <H1 color="black">Something went really wrong!</H1>
                                        </MarronHeader>
                                        <h2>Looks like you deleted more then one episode... which shouldn't be possible.</h2>
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

export default DelEpi;