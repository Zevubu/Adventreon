import React, { useState, useEffect} from "react";
import {DivWBorder, ProviderBox, BigBlock} from "../../styles/homeStyle"
import API from "../../API/loggedOutAPI";
import HostFiller from "../../componets/HostFiller/index"
import ShowFiller from "../../componets/CatagoryFiller/show_filler"
import { Logo } from "../../styles/componentStyles";

function AllPage (){
    const [Hosts, setHosts] = useState([]);
    const [Shows, setShows] = useState([]);
    // const [DSBcount, setDSBcount] = useState(0)

    useEffect(() => {
       const fetchAllH = async () =>{
            const result = await API.getHosts()
            console.log(result.data)
            setHosts(result.data)
        };
        const fetchAllS = async () =>{
            const result = await API.getShows()
            console.log(result.data)
            setShows(result.data)
        };
        fetchAllH(); 
        fetchAllS();
        
    }, []);

    return(
        <BigBlock>
            {/* <a id="Hosts"/> */}
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
                <ProviderBox>
                {Hosts.map((host, key) => (
                    <HostFiller
                    key={key} id={host.id} userName={host.user_name} userType={host.user_type}
                    title={host.title} about={host.about} pImg={host.p_img} bImg={host.b_img}
                    services ={host.shows} appointments={host.appointments}
                    availability={host.availability} screened={host.screened} 
                    timeStamp={host.time_stamp}
                    />
                ))}
              </ProviderBox>
              <ProviderBox>
                {Shows.map((show, key) => (
                    <ShowFiller
                    key={key} id={show.id} showName={show.show_name} about={show.about} pImg={show.img} bImg={show.b_img}
                    catagory={show.catagory} subCatagory={show.sub_catagory} hostId={show.host_id} 
                    hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                    patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage}
                    eighteenPlus={show.eighteen_plus} booked={show.booked} 
                    paid={show.paid} canceled={show.canceled} entertain={show.entertain}
                    couns={show.couns} relig={show.relig} timeStamp={show.time_stamp}
                    />
                ))}
              </ProviderBox>
            </DivWBorder>
        </BigBlock>
    )
}

export default AllPage;