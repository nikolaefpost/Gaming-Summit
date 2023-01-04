const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-VHxKoGfa2dBNwFlF0QpNJyE2HMMCudwA_PrdEx-KcYk",
  });

  return contentfulClient
    .getSpace("8u1iknu29fcj")
    .then((space) => space.getEnvironment("master"));
};
