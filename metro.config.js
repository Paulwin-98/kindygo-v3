const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Apply NativeWind configuration
module.exports = withNativeWind(config, { input: "./app/global.css" });
