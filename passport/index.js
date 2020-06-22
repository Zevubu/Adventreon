const _ = require("lodash");
const passport = require("passport"); 
const passportJWT = require("passport-jwt");
const ROLES = require('./utils/roles');

const cryption = require('../controllers/cryption');
const connection = require("../controllers/connection");
const query = require('../controllers/query');
const dbConfig = require('../dbConfig'); 
const create = require('../crud/create');
const CONFIG = require('../jwtConfig');
const userQuery = require("../query_builders/user-query");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = `${CONFIG.jwt_encryption}`;

const users = [
    {
        id: 1,
        name: 'zevubu',
        password: 'password',
        userType: 'admin'
    },
    {
        id: 2,
        name: 'host',
        password: 'host',
        userType: 'host'
    },
    {
        id: 3,
        name: 'test',
        password: 'test',
        userType: 'user'
    }
];

const strategy =  new JwtStrategy(opts,(jwt_payload, next)=>{
    console.log('Payload received', jwt_payload);
    // usually this would be a database call:
    const userCall = async () =>{
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        'SELECT id, user_name, user_type, dob, time_stamp FROM users WHERE id=?',
        [jwt_payload.id]
      )
      if(user){
        // console.log(`JWT Strategy user:${user[0]}`)
        next(null, user[0]);
      } else {
        // console.log(`Jwt Payload: ${jwt_payload}`)
        next(null, false)
      }
    }
    userCall()
    
    // const user = 
    // const user = users[_.findIndex(users, {id: jwt_payload.id})];
    // ^
 
});

passport.use(strategy);

const checkIsInRole = (...roles) => (req, res, next) => {
    if (!req.user) {
      return res.send("No user supplied")
    }
  
    const hasRole = roles.find(role => req.user.userType === role || req.user.userType === "admin")
    if (!hasRole) {
      return res.send('You do not have permission to access this route')
    }
  
    return next()
}

const validate = (req, res, next) => {
  passport.authenticate('jwt', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
      return res.send({valid:false, error: err, info: info}); 
    }else{
      if(user.user_type === 'manager'){
        return res.send({valid:true, admin: true, host: true, info: info, user: {id: user.id, user_name: user.user_name}});
      }else if(user.user_type === 'host'){
        return res.send({valid:true, admin: false, host:true, info:info, user: user});
      }else{
        return res.send({valid:true, admin: false, host:false, info:info, user: user});
      }
    }
  })(req, res, next);
}




module.exports = {
    ROLES,
    validate,
    passport,
    passportJWT,
    ExtractJwt,
    JwtStrategy,
    opts,
    users,
    strategy,
    checkIsInRole
};