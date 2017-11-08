const contentful = require('contentful');

exports.initContentful = ({ SPACE, TOKEN, HOST }) => {
  creatClient({
    host: HOST,
    token: TOKEN,
    space: SPACE,
  });
};
