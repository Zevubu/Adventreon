import React, {useContext, useState, useEffect} from "react";
import { useAuth, useUser, useHost, useManagment, useTemp, useTempM, useUserInfo } from "../../context/heart";
import {BoxWBorder,MenuHeader,MenuHeaderSM,MenuBigBox, MenuBox} from "../../styles/menuStyles"

const ManagerTools =()=>{
    const {isUser} = useUser();
    const {isHost} = useHost();
    const {isTempP} = useTemp();
    const {isTempM} = useTempM();
    const {isManager} = useManagment();
    const {userData} = useUserInfo();

    return(
        <div>    
                <MenuHeader>
                    <h2>Control Panel</h2>
                </MenuHeader>
                {isUser&&(
                    <MenuBigBox>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Profiles</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Shows</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Episodes</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                    </MenuBigBox>
                )}
                {isHost&&(
                    <MenuBigBox>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Host Profiles</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Shows</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Episodes</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                    </MenuBigBox>
                )}
                {isManager&&(
                    <MenuBigBox>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Manager Profiles</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Shows</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Episodes</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Create</h2>
                                <h2>Update</h2>
                                <h2>Delete</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                        <BoxWBorder>
                            <MenuHeaderSM>
                                <h1>Tools</h1>
                            </MenuHeaderSM>
                            <MenuBox>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                                <h2>Menu Item</h2>
                            </MenuBox>  
                        </BoxWBorder>
                    </MenuBigBox>
                )}
        </div>
    )
}

export default ManagerTools;