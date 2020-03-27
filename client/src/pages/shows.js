import React from "react";
import {DivWBorder, BigBlock} from "../styles/homeStyle"

// import API from "../API/loggedOutAPI";
import EnterShows from '../componets/ShowBodies/EnterShow'
import CounsShows from '../componets/ShowBodies/CounsShow'
import ReligShows from '../componets/ShowBodies/ReligShow'

function Shows (){
    // const [Shows, setShows] = useState([]);
    // const [DSBcount, setDSBcount] = useState(0)

    // useEffect(() => {
    //    const fetchShows = async () =>{
    //         const result = await API.getShows()
    //         // console.log(result.data)
    //         setShows(result.data)
    //     };
    //     fetchShows(); 
    // }, []);
// user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform
    return(
        <BigBlock>
            {/* <a id="Shows"/> */}
            {/* Shows will be auto populated from database, Items put in as filler*/}
            <DivWBorder>

                {/* <BlueHeader>
                    <H2>Browse our Shows.</H2>
                </BlueHeader> */}
                <br/>
                <div>
                    <EnterShows />
                </div>
                <div>
                    <CounsShows />
                </div>
                <div>
                    <ReligShows /> 
                </div>
                
               
{/*                 
                <ProviderBox>
                {Shows.map((Show, key) => (
                    <ShowFiller
                    key={key} id={show.id} showName={show.show_name} about={show.about}
                    imgP={show.img} imgB={show.img_b} catagory={show.catagory} subCatagory={show.sub_catagory}
                    hostId={show.host_id} hostName={show.host_name} hostImg={show.host_img} payment={show.payment}
                    patreon={show.patreon} wpTitle={show.wp_title} webpage={show.webpage} ETPlus={show.eighteen_plus}
                    booked={show.booked} paid={show.paid} canceled={show.canceled} entertain={show.entertain} couns={show.couns} 
                    relig={show.relig} timeStamp={show.time_stamp}
                    />
                ))}
              </ProviderBox> */}
            </DivWBorder>
        </BigBlock>
    )
}
export default Shows;