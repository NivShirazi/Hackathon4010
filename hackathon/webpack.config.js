const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');


// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // module: {
  //   rules: [
  //     {
  //       test: /\.md$/,
  //       use: [
  //         {
  //           loader: "html-loader",
  //         },
  //         {
  //           loader: "remark-loader",
  //           options: {
  //             remarkOptions: {
  //               plugins: [RemarkHTML],
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // };
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
  
});
