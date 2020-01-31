let express = require('express');
let router = express.Router();
const googleAuth = require('google-oauth-jwt');
const jsonExtractor = require('../helper/json-extractor');
const rawJson = require('../data/google-apis-scopes');
const scopes = jsonExtractor.getValuesFromJson('scopes', rawJson);

const getToken = async () => {
  return new Promise((resolve => {
    googleAuth.authenticate(
        {
          email: process.env.service_account_email,
          key: process.env.service_account_private_key,
          scopes: scopes
        },
        (err, token) => {
          if (err) {
            resolve(err)
          } else {
            resolve(token)
          }
        }
    )
  }));
};

router.get('/', async (req, res, next) => {
  let token = await getToken();
  res.send(token);
});

module.exports = router;
