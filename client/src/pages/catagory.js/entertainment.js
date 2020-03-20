import React, { useState, useEffect} from "react";
import {DivWBorder, ProviderBox, BigBlock, BlueHeader,H2,} from "../styles/homeStyle"
import API from "../API/loggedOutAPI";
import HostFiller from "../../componets/HostFiller/index"




function Hosts (){
    const [Hosts, setHosts] = useState([]);
    // const [DSBcount, setDSBcount] = useState(0)

    useEffect(() => {
       const fetchHosts = async () =>{
            const result = await API.getProviders()
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
                    <H2>Meet our intimacy experts</H2>
                </BlueHeader>
                <ProviderBox>
                {Hosts.map((Host, key) => (
                    <HostFiller
                        key={key} id={Host.id} userName={Host.user_name} userType={Host.user_type}
                        title={Host.title} about={Host.bio_sm} img={Host.img_sm}
                        services ={Host.services} appointments={Host.appointments}
                        availability={Host.availability} screened={Host.screened} 
                        timeStamp={Host.time_stamp}
                    />
                ))}
              </ProviderBox>
            </DivWBorder>
        </BigBlock>
    )
}
export default Hosts;