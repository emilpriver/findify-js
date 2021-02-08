const path = require('path')
const { compact } = require('lodash');
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const WebpackHashPlugin = require('./scripts/webpackHashPlugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

require('dotenv').config();

interface WebpackEnvArgs {
  analyze?: boolean;
  generateStatsFile?: boolean;
  findify_env?: 'staging'
}

const componentsPath = path.resolve(__dirname, '../react-components');

const createGlobals = (isDevelopment, isLocal) => [
  '__MERCHANT_CONFIG_URL__',
  '__MERCHANT_API_KEY__',
  '__MERCHANT_VERSION__',
  '__MERCHANT_CSS__',
  '__INCLUDE_POLYFILL__',
  '__ENVIRONMENT__',
  '__CONFIG__',
  '__DISABLE_SENTRY__',
  '__MERCHANT_ID__',
  '__SENTRY_ENABLED__',
].reduce((acc, name) =>
({
  ...acc,
  [name]: isDevelopment
    ? 'false'
    : isLocal
      ? (process.env[name] && JSON.stringify(process.env[name]) || name)
      : name
}), {}
)

export default (env: WebpackEnvArgs, { mode, origin = 'prod' }) => {
  const config = {
    entry: {
      'bundle': path.resolve(__dirname, 'src/index')
    },
    devtool: 'source-map',
    output: {
      jsonpFunction: 'findifyJsonp',
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: mode === 'development' || origin === 'local'
        ? process.env.PUBLIC_PATH || '/'
        : origin === 'prod'
          ? 'https://cdn.jsdelivr.net/npm/@findify/bundle@__MERCHANT_VERSION_RAW__/dist/'
          : `https://findify-assets-2bveeb6u8ag.netdna-ssl.com/bundle/${origin}/__MERCHANT_VERSION_RAW__/`
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3000,
      stats: 'minimal',
      historyApiFallback: true,
      hot: false
    },
    optimization: {
      usedExports: false,
      minimizer: [
        new TerserPlugin({
          extractComments: true,
          cache: true,
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            extractComments: 'all',
            compress: {
              pure_funcs: ['console.info', 'console.debug', 'console.warn']
            },
          }
        }),
      ],  
      concatenateModules: false,
      splitChunks: {
        chunks: "all",
        maxAsyncRequests: 2,
        maxInitialRequests: 2,
        minChunks: 2,
        name(module, chunks, cacheGroupKey) {
          return cacheGroupKey
          // const allChunksNames = chunks.map((item) => item.name).join('~');
          // const res = cacheGroupKey + allChunksNames;
          // const hash = require("crypto").createHash('md5').update(res).digest('base64').substr(0, 6).replace('/', '00');
          // return `chunk-${cacheGroupKey}`;
        }
      }
    },
    stats: 'minimal',
    bail: true,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      alias: {
        'react-dom': mode === 'development' && '@hot-loader/react-dom' || 'react-dom',
        // 'recompose': 'recompose/dist/Recompose.cjs',
        'lodash.throttle': 'lodash/throttle',
        'lodash.debounce': 'lodash/debounce',
      
        'hoist-non-react-statics': path.resolve(__dirname, '../../node_modules/hoist-non-react-statics'),
        debug: path.resolve(__dirname, '../../node_modules/debug'),
        immutable: path.resolve(__dirname, '../../node_modules/immutable'),
        
        'babel-runtime/core-js/object/get-prototype-of': 'core-js/features/object/get-prototype-of',
        'babel-runtime/core-js/object/get-own-property-descriptor': 'core-js/features/object/get-own-property-descriptor',
        'babel-runtime/core-js/object/assign': 'core-js/features/object/assign',
        'babel-runtime/core-js/object/create': 'core-js/features/object/create',
        'babel-runtime/core-js/promise': 'core-js/features/promise',
        'babel-runtime/core-js/object/keys': 'core-js/features/object/keys',
        'babel-runtime/core-js/object/define-property': 'core-js/features/object/define-property',
        'babel-runtime': '@babel/runtime',
      },
    },
    module: {
      rules: [
        {
          parser: { amd: false }
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(componentsPath, 'src'),
          ],
          use: [
            ...(mode === 'development' ? ["style-loader"] : []),
            {
              loader: mode === 'development' ? 'css-loader' : 'css-loader/locals',
              options: {
                modules: true,
                camelCase: true,
                getLocalIdent: require(
                  path.resolve(componentsPath, 'scripts/getLocalIdent')
                )
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(componentsPath, 'postcss.config.js')
                }
              }
            }
          ]
        },
        {
          test: /\.(j|t)s$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '../../node_modules'),
          ],
          exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: "upward",
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(componentsPath, 'src'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: "upward",
                envName: mode,
                babelrc: false,
                extends: path.resolve(componentsPath, 'babel.config.js')
              }
            }
          ]
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        ...createGlobals(mode === 'development', origin === 'local'),
        __root: 'window.findify',
        __COMMITHASH__: JSON.stringify(new GitRevisionPlugin().commithash()),
        __PUBLIC_PATH__: JSON.stringify(process.env.PUBLIC_PATH),
        'process.env': {
          HOT: mode === 'development',
          BROWSER: true,
          NODE_ENV: JSON.stringify(mode),
          IS_TEST: origin === 'test',
          FINDIFY_ENV: JSON.stringify(process.env.FINDIFY_ENV || 'production')
        },
        __DEBUG__: mode === 'development'
          ? 'base => props => { console.log(props); return base(props) }'
          : ''
      }),

      new DuplicatePackageCheckerPlugin(),

      new HtmlWebpackPlugin({
        hash: true,
        template:  path.resolve(__dirname, 'index.html'),
        inject: 'head'
      }),

      new WebpackHashPlugin({
        mapping: {
          'immutable/dist/immutable.es': 'immutable',
          '@hot-loader/react-dom': 'react-dom',
          'recompose/dist/Recompose.esm': 'recompose',
          'swiper/js/swiper.esm.js': 'swiper/js/swiper.esm',
          'react-id-swiper/lib/ReactIdSwiper.custom': 'react-id-swiper/lib/ReactIdSwiper',
        },
        ignoreModulesCache: ['Jmof']
      })
    ],

  };

  if (Boolean(env && env.analyze)) {
    const analyzerPlugin = new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: true,
      generateStatsFile: Boolean(env.generateStatsFile),
      reportFilename: 'stats/webpack.stats.html',
      statsFilename: 'stats/webpack.stats.json',
    });
    config.plugins!.push(analyzerPlugin);
  }

  if (mode === 'production') {
    config.plugins.push(
      new MiniCssExtractPlugin({ filename: "[name].css" }),
      new CompressionPlugin({ exclude: /\.map/ }),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname,'../react-components/lib/raw.css'),
        to: 'raw.css',
      }]),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname,'../react-components/lib/styles.css'),
        to: 'styles.css',
      }]),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname,'../react-components/lib/tree.json'),
        to: 'tree.json',
      }]),
      new ManifestPlugin({
        filter: f => f.path.split('.').pop() === 'js'
      })
    )
  }

  if (mode === 'development') {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.DllReferencePlugin({
      //   context: __dirname,
      //   manifest: require(path.join(__dirname, 'node_modules/dll/vendor-manifest.json'))
      // }),
      // new AddAssetHtmlPlugin({
      //   filepath: require.resolve(path.join(__dirname, 'node_modules/dll/vendor.dll.js'))
      // })
    )
  }

  return config;
};
