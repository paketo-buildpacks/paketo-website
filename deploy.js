firebase = require('firebase-tools');

module.exports = async () => {
  const { GITHUB_HEAD_REF, FIREBASE_TOKEN} = process.env;
  // overkill... probably.
  const branch = GITHUB_HEAD_REF.split('/')
      .filter(item => item.trim().length > 0)
      .pop();

  firebase
    .hosting
    .channel
    .deploy(branch, { json: true, e: '24h', only: 'paketo-staging', token: FIREBASE_TOKEN})
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    });
}


