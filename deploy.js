const firebase = require('firebase-tools');
const core = require('@actions/core');

module.exports = async ({ expires } = { expires: '1h'}) => {
  const { GITHUB_HEAD_REF } = process.env;

  var channelID = "pr";

  if (GITHUB_HEAD_REF) {
    channelID = GITHUB_HEAD_REF.split('/')
      .filter(item => item.trim().length > 0)
      .pop();
  }

  firebase
    .hosting
    .channel
    .deploy(channelID, { json: true, expires, only: 'paketo-stage'})
    .then((data) => {
      console.log(`PR DEPLOYED TO: ${data['paketo-stage'].url}`)
      console.log(`SITE EXPIRES AT: ${data['paketo-stage'].expireTime} (in ${expires})`)
      core.setOutput("staging_url", data['paketo-stage'].url);
      core.setOutput("expiration", `${data['paketo-stage'].expireTime} (in ${expires})`);
    })
    .catch((err) => {
      console.log(`deploy: ${err}`);
    });
}

