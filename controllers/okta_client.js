require("dotenv").config();
const okta = require('@okta/okta-sdk-nodejs');

const Oktaclient = new okta.Client({
  orgUrl: `${process.env.REACT_APP_OKTA_ORG_URL}`,
  token: `${process.env.OKTA_MEMBERSHIP_TOKEN}`
});

module.exports = Oktaclient;