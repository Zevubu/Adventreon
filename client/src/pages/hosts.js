import React, { useState, useEffect} from "react";
import {DivWBorder, ProviderBox, BigBlock, BlueHeader, H2} from "../styles/homeStyle"
import API from "../API/loggedOutAPI";
import HostFiller from "../componets/HostFiller/index"

function Hosts (){
    const [Hosts, setHosts] = useState([]);
    // const [DSBcount, setDSBcount] = useState(0)

    useEffect(() => {
       const fetchHosts = async () =>{
            const result = await API.getHosts()
            // console.log(result.data)
            setHosts(result.data)
        };
        fetchHosts(); 
    }, []);
// user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform
    return(
        <BigBlock>
            {/* <a id="Hosts"/> */}
            {/* Hosts will be auto populated from database, Items put in as filler*/}
            <DivWBorder>
                <BlueHeader>
                    <H2>Browse our hosts.</H2>
                </BlueHeader>
                <ProviderBox>
                {Hosts.map((host, key) => (
                    <HostFiller
                    key={key} id={host.id} userName={host.user_name}
                    title={host.title} pImg={host.p_img} bImg={host.b_img}
                    />
                ))}
              </ProviderBox>
            </DivWBorder>
        </BigBlock>
    )
}
export default Hosts;