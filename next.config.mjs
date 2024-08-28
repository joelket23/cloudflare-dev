import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// console.log('test', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
export default nextConfig;
