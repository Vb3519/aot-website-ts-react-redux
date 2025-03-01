const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Точка входа для проекта
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Для кэширования
    clean: true, // Очистка dist перед сборкой
  },
  devtool: 'source-map', // Для удобства отладки
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Добавлено .jsx
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/, // Обработка TypeScript и JSX файлов
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // Используем babel-loader для обработки файлов
            options: {
              presets: [
                '@babel/preset-env', // Для работы с новыми версиями JavaScript
                '@babel/preset-react', // Для работы с JSX (React)
                '@babel/preset-typescript', // Для работы с TypeScript
              ],
              plugins: [
                '@babel/plugin-transform-runtime', // Оптимизация для повторяющихся функций (например, async/await)
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/, // Обработка SCSS файлов
        use: [
          'style-loader', // Вставляем стили в HTML
          'css-loader', // Обрабатываем CSS
          'sass-loader', // Обрабатываем SCSS
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/, // Обработка изображений
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Обслуживаем файлы из директории dist
    },
    port: 3000,
    hot: true, // Для автоматической перезагрузки
    open: true, // Автоматически открываем браузер
    historyApiFallback: true, // Для работы с React Router (чтобы не было ошибки 404)
  },
};
