import React, { useState, useEffect} from "react";
import {DivWBorder, ProviderBox, BigBlock, BlueHeader,H2,} from "../styles/homeStyle"
import API from "../API/loggedOutAPI";
import HostFiller from "../componets/HostFiller/index"




function Hosts (){
    const [Hosts, setHosts] = useState([]);
    // const [DSBcount, setDSBcount] = useState(0)

    useEffect(() => {
       const fetchHosts = async () =>{
            const result = await API.getHosts()
            console.log(result.data)
            setHosts(result.data)
        };
        fetchHosts(); 
    }, []);

    return(
        <BigBlock>
            {/* <a id="Hosts"/> */}
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
                <BlueHeader>
                    <H2>View our Hosts page</H2>
                </BlueHeader>
                <ProviderBox>
                {Hosts.map((host, key) => (
                    <HostFiller
                    key={key} id={host.id} userName={host.user_name} userType={host.user_type}
                    title={host.title} about={host.about} img={host.p_img}
                    services ={host.shows} appointments={host.appointments}
                    availability={host.availability} screened={host.screened} 
                    timeStamp={host.time_stamp}
                    />
                ))}
              </ProviderBox>
            </DivWBorder>
        </BigBlock>
    )
}
export default Hosts;