/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "hvlrqqzumpqklusjwrzh.supabase.co",
          port: "",
          pathname: "/storage/v1/object/public/cabins-image/**",
        },
      ],
    },
    // output: "export",
  };
  
  export default nextConfig;
  