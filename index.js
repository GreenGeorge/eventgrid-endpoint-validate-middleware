/**
 * Express middleware to respond to eventgrid webhook endpoint validation request,
 * and validate this route as an endpoint
 * If not an azure validation request, does nothing
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @callback next - Express next callback to pass to the next route
 */
const eventgridEndpointValidate = (req, res, next) => {
  const isEventgridEndpointCheck = req.headers['aeg-event-type'];

  if (isEventgridEndpointCheck) {
    const validationCode = req.body[0].data.validationCode;
    if (validationCode) return res.json ({ validationResponse: validationCode });
  }

  return next();
};

module.exports = eventgridEndpointValidate;
