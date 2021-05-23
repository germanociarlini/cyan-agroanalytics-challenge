module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "admin",
  password: "root",
  database: "geolocdb",
  define: {
    timestamps: true,
    underscored: true,
  },
  "use_env-variable": "DATABASE_URL",
};
