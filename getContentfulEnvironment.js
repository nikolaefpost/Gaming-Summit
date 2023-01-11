const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-s-7Sxy0CzMFJF22t6RZEgd-LlGbvm5Rq2pm8CNa8Nco",
  });

  return contentfulClient
    .getSpace("lb3plniidqbt")
    .then((space) => space.getEnvironment("master"));
};
