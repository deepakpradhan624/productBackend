const successResponse = (res, message, data = {}) => {
  return res.status(200).json({
    status: 200,
    message: message,
    ...data,
  });
};

const validationResponse = (res, message, data = {}) => {
  return res.status(400).json({
    status: 400,
    message: message,
    ...data,
  });
};

const serverResponse = (res, message, data = {}) => {
  return res.status(500).json({
    status: 400,
    message: message,
    ...data,
  });
};

module.exports = { successResponse, validationResponse, serverResponse };
