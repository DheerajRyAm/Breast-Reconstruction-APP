// app.config.js
export default {
  expo: {
    name: "MammoMatch",
    slug: "mammo-match",  // Set a unique identifier for your app
    version: "1.0.0",
    orientation: "portrait",
    splash: {
      image: "./assets/MM-Logo.png",  // Path to your splash logo
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/MM-Logo.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/MM-Logo.png",
    },
  },
};
