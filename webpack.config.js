const { VueLoaderPlugin } = require('vue-loader')
module.exports = {

    watch: true,
	mode:"production",
    target: 'electron-main',

    entry: './app/src/entry.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
      
        
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
            }
            // other vue-loader options go here
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
       
        {
          test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
          loader: 'file-loader?name=assets/fonts/[name].[ext]',
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers'),
                  indentedSyntax: true // optional
                },
              },
            },
          ],
        },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            /*include: [
              path.resolve(__dirname, 'node_modules'),
            ]*/
            
        },
    ]
    },

    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
    plugins: [
    /*new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),*/
    new VueLoaderPlugin()
  ],

}
