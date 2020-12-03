import React, {useContext, useState, useEffect} from "react";

import {BoxWBorder,MenuHeader,MenuHeaderSM,MenuBigBox, MenuBox} from "../../styles/menuStyles"

const ManagerTools =()=>{
    return(
        <div>    
                <MenuHeader>
                    <h2>Control Panel</h2>
                </MenuHeader>
                <MenuBigBox>
                    <BoxWBorder>
                        <MenuHeaderSM>
                            <h1>Profiles</h1>
                        </MenuHeaderSM>
                        <MenuBox>
                            <h2>Update</h2>
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
        </div>
    )
}

export default ManagerTools;