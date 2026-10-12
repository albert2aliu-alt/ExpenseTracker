// https://docs.expo.dev/guides/using-eslint/
const { defineConfig, globalIgnores } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  globalIgnores(["dist/**", ".expo/**"]),
  expoConfig,
  {
    rules: {
      // React Native Animated stores animation instances in refs by design.
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
