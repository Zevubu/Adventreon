import React, {useContext, useState, useEffect} from "react";

import {DivWBorder, MarronHeader,BigMarronBtn, H1,H2, PT, PS} from "../../../styles/homeStyle";
import { FormBigBox,FormLittleBox,FormBox,FormBoxWError, Btn, Input, TextArea, PE} from "../../../styles/signUpOutStyles";

function DelShow (){
    return(
        <DivWBorder>
            <MarronHeader>
                <H1 color="red">Show Deletion page.</H1>
            </MarronHeader>
            <FormBigBox>
                <H2>Testing!</H2>
                {/* choose how to search:
                    from list 
                        host,
                        
            
                    by username or by email */}
                {/* pick user */}

                {/* autogenorate form with user picked info */}
                {/* userName */}
                {/* firstName */}
                {/* lastName */}
                {/* DOB */}
                {/* about  */}
                {/* doesn't include email and password. */}




            </FormBigBox>

        </DivWBorder>
    )
}

export default DelShow;