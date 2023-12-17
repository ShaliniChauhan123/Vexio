require("dotenv").config();

const {
  PORT,
  DB_USERNAME,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
  JWT_SECRET,
  SHOPIFY_APP_API_KEY,
  SHOPIFY_APP_API_SECRET_KEY,
  SENDER_EMAIL,
  SENDGRID_API_KEY,
  NODE_ENV,
} = process.env;

// Define a base domain variable based on the environment
const BE_DOMAIN =
  NODE_ENV === "production"
    ? "https://vexio-production.up.railway.app"
    : "http://localhost:4000";

const FE_DOMAIN =
  NODE_ENV === "production"
    ? "https://vexio-lyart.vercel.app"
    : "http://localhost:3000";

module.exports = {
  port: PORT || 4000,
  username: DB_USERNAME,
  database: DB_NAME,
  password: DB_PASSWORD,
  db_port: DB_PORT,
  host: DB_HOST,
  jwt_secret: JWT_SECRET || "vexio-secret",
  expires_in: "24h",
  issuer: "vexio",
  shopify_api_key: SHOPIFY_APP_API_KEY,
  shopify_api_secret: SHOPIFY_APP_API_SECRET_KEY,
  sender_email: SENDER_EMAIL,
  sendgrid_api_key: SENDGRID_API_KEY,
  node_env: NODE_ENV,
  be_domain: BE_DOMAIN,
  fe_domain: FE_DOMAIN,
};
