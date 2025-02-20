const __Resume =
  "https://drive.google.com/file/d/1v7qgOTrtXc6mb3MHibnSu7bxKYdtXUhG/";

const env = {
  RESUME_LINK_VIEW: `${__Resume}view`,
  RESUME_LINK_PREVIEW: `${__Resume}preview`,
  EMAIL_KEY: process.env.REACT_APP_EMAIL_KEY,
  EMAIL_TEMPLATE: process.env.REACT_APP_EMAIL_TEMPLATE,
  EMAIL_SERVICE_ID: process.env.REACT_APP_EMAIL_SERVICE_ID,
};

export default env;
