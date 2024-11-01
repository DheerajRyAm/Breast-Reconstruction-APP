// app.config.js
export default {
    expo: {
      name: "YourAppName",
      slug: "your-app-slug",
      version: "1.0.0",
      orientation: "portrait",
      splash: {
        image: "./assets/MM-Logo.png",
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
  