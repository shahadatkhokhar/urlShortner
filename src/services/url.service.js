const { URL } = require('../models');
const shortUUID = require('short-uuid'); // require

const createURL = async (body) => {
  if (!body.url) {
    return { error: 'No url to shorten' };
  } else {
    const { url } = body;
    const urlObj = await URL.create({
      url: url,
      url_id: shortUUID.generate(),
    });
    return { data: urlObj, success: true, message: 'URL created successfully' };
  }
};
const getURL = async (req) => {
  if (!req.params.url_id) {
    return { error: 'url_id is required' };
  } else {
    const url_id = req.params.url_id;
    console.log(url_id);
    const urlObj = await URL.findOne({
      where: { url_id: url_id },
    });
    return { data: urlObj, success: true, message: 'URL found' };
  }
};

module.exports = {
  createURL,
  getURL,
};
