const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.resolve(__dirname, 'src', 'client', 'scripts.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'client'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  stats: {
    errorDetails: true,
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.client.json',
          compilerOptions: {
            sourceMap: true,
          },
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { outputStyle: 'expanded' },
            },
          },
        ],
      },
    ],
  },
};
