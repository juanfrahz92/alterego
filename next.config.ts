import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un servidor autocontenido para imágenes Docker mínimas.
  output: "standalone",
};

export default nextConfig;
