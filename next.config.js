/** @type {import('next').NextConfig} */
const nextConfig = {
  // I tried to solve the following error with this values on nextConfig:

  //app-index.js:32 Warning: Prop `className` did not match.
  // Server: "__variable_e79844 __variable_19b540 __variable_656221 __variable_03547c grid grid-cols-12 gap-4 font-body text-logoColor-neutralAG vsc-initialized"
  // Client: "__variable_e79844  __variable_19b540 __variable_656221 __variable_03547c grid grid-cols-12 gap-4 font-body text-logoColor-neutralAG"

  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["picsum.photos", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
