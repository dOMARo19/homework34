const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;

const optimize = () => {
  const config = {
  splitChunks: {
  chunks: 'all',
 },
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
};

return config;
};

const getFilename = (ext) => `[name]${IS_DEV ? '' : '.[hash]'}.${ext}`;

const setCssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const setPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: getFilename('css'),
    }),
    new EslintPlugin(
      {
        extensions: ['js'],
        fix: true,
      },
    ),
  ]
  return plugins;
};

const setJsLoaders = (extra) => {
  const loaders = {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      } 
  }
  if (extra) {
    loaders.options.presets.push(extra);
  }

  return loaders;
};

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.jsx',
    stat: './statistics.ts',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFilename('js'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@css': path.resolve(__dirname, 'src', 'css'),
      '@less': path.resolve(__dirname, 'src', 'less'),
      '@sass': path.resolve(__dirname, 'src', 'sass'),
    },
  },
  optimization: optimize(),
  devServer: {
    port: 4200,
    hot: false,
    compress: true,
  },
  plugins: setPlugins(),
  devtool: IS_DEV ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: setJsLoaders(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: setJsLoaders('@babel/preset-react'),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: setJsLoaders('@babel/preset-typescript'),
      },
      {
        test: /\.css$/i,
        use: setCssLoaders(),
      },
      {
        test: /\.less$/i,
        use: setCssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: setCssLoaders('sass-loader'),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'src/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
};