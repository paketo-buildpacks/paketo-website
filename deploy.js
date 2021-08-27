firebase = require('firebase-tools');

module.exports = async ({ expires } = { expires: '1h'}) => {
  const { GITHUB_HEAD_REF } = process.env;

  var channelID = "pr";

  console.log(`channelID: ${channelID}`);
  console.log(`GH_HEAD_REF: ${GITHUB_HEAD_REF}`);

  if (GITHUB_HEAD_REF) {
    channelID = GITHUB_HEAD_REF.split('/')
      .filter(item => item.trim().length > 0)
      .pop();
  }

  console.log(`channelID: ${channelID}`);

  firebase
    .hosting
    .channel
    .deploy(channelID, { json: true, expires, only: 'paketo-stage'})
    .then((data) => {
      console.log(`PR DEPLOYED TO: ${data['paketo-stage'].url}`)
      console.log(`SITE EXPIRES AT: ${data['paketo-stage'].expireTime} (in ${expires})`)
      console.log(`::set-output name=staging_url::${data['paketo-stage'].url}`)
      console.log(`::set-output name=expiration::${data['paketo-stage'].expireTime} (in ${expires})`)
    })
    .catch((err) => {
      console.log(`deploy: ${err}`);
    });
}

