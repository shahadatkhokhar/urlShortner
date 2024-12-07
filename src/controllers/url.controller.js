const UrlService = require('../services/url.service');
const httpStatus = require('http-status');

const getURL = async (req, res) => {
  const data = await UrlService.getURL(req);

  if (data.error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ error: data.error });
  } else return res.status(httpStatus.OK).send(data);
};
const createURL = async (req, res) => {
  const data = await UrlService.createURL(req.body);
  if (data.error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ error: data.error });
  } else return res.status(httpStatus.CREATED).send(data);
};

module.exports = {
  createURL,
  getURL,
};
