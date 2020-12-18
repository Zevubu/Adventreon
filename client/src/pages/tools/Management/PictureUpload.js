import React, {useState} from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form';
import API from '../../../API/HostLogIn'
import {DivWBorder,BigMarronBtn, H2} from "../../../styles/homeStyle"
import {FormBigBox,FormBoxWError, Btn, Input, PE} from "../../../styles/signUpOutStyles"
// import { result } from 'lodash';

function PictureUpload (){
    const [Success, setSuccess] = useState(false);
    const [ProUrl, setProUrl] = useState("");
    // const [BGUrl, setBGUrl] = useState("");
    const [ImgError, setImgError] = useState();
    const { register, handleSubmit, errors } = useForm();

    const handleUpload = (data, e) => {
        // console.log(data.img[0])
        const File = data.img[0];
        const FileParts = data.img[0].name.split('.');
        console.log(FileParts);
        const FileName = FileParts[0];
        const FileType = FileParts[1];
        API.imgUploader({
            fileName: FileName,
            fileType: FileType
        })
        .then (res => {
            const returnData = res.data.data.returnData;
            const signedRequest = returnData.signedRequest;
            const url = returnData.url
            setProUrl(url);
            console.log("Recieved a signed request " + signedRequest);
            const SplitSignedRequest = signedRequest.replace(/.*\//,'')
            console.log(`split tester: ${SplitSignedRequest}`)
            const options = {
                headers: {
                    'Content-Type': FileType,
                }
            };
            axios.put("/imgproxy/"+SplitSignedRequest, File, options)
            .then(result => {
                console.log(`Response from s3 ${result}`)
                setSuccess(true)
            })
            .catch(error => {
                setImgError(true)
                alert("Upload File ERROR " + JSON.stringify(error));
              })
        })
        .catch(error => {
            alert(`Get Signed Request Error:${JSON.stringify(error)}`);
        }) 
    }

    return(
        <DivWBorder> 
            {Success &&(
                <BigMarronBtn>
                    Img Uploaded, Celebrate! 
                </BigMarronBtn>
            )}
            {ImgError &&(
                <BigMarronBtn>
                    Error: {ImgError}
                </BigMarronBtn>
            )}
            {!Success &&(
            <FormBigBox onSubmit={handleSubmit(handleUpload)}>
                <H2 color="black">Upload an img</H2>
                <FormBoxWError>
                     <Input
                    name="img"
                    type="file"
                    ref ={register({required: true})}
                />
                 {errors.videoLink && errors.videoLink.type === "required" &&(<PE>This is required!</PE>)}
                </FormBoxWError>
                <Btn type="submit" value="Submit">Upload Img</Btn>
            </FormBigBox>
            )}
            
        </DivWBorder> 
    )
}

export default PictureUpload;

