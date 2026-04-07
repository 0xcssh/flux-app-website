/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fluxcycle.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/privacy", "/terms"],
};
