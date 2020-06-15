const express = require("express");
const router = express.Router();
const jwt= require('jsonwebtoken');
const CONFIG = require('../../jwtConfig');

router.get('/user', (req, res) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE4MzE1NDgsImV4cCI6MTU5MTg0MTU0OH0.VBu65qklrPs7LDz0R8pDb-OKGpM8w7wOv8-chtmjUb8"
    
    const DecodeRunner = async () =>{
        const Decoder = await jwt.verify(token,CONFIG.jwt_encryption);

        res.json(`Token: ${Decoder}`);
    }

    DecodeRunner()
})