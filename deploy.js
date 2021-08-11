firebase = require('firebase-tools');

module.exports = async ({ expires } = { expires: '1h'}) => {
  const { GITHUB_HEAD_REF } = process.env;

  const branch = GITHUB_HEAD_REF.split('/')
      .filter(item => item.trim().length > 0)
      .pop();

  firebase
    .hosting
    .channel
    .deploy(branch, { json: true, expires, only: 'paketo-buildpacks-staging'})
    .then((data) => {
      console.log(`PR DEPLOYED TO: ${data['paketo-buildpacks-staging'].url}`)
      console.log(`SITE EXPIRES AT: ${data['paketo-buildpacks-staging'].expireTime} (in ${expires})`)
    })
    .catch((err) => {
      console.log(`deploy: ${err}`);
    });
}


