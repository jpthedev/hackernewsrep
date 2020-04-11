module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          node: "current"
        }
      }
    ],
    [
      "@babel/preset-react"
    ]
  ],
  ignore: [
    "node_modules",
    "library/js/vendor",
    "dist"
  ],
}