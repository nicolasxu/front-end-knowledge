var source = "https://blog.madewithlove.be/post/webpack-your-bags/";
/* ... */
{
  // When you import a .ts file, parse it with Typescript
  test: /\.ts/,
  loader: 'typescript',
},
{
  // When you encounter images, compress them with image-webpack (wrapper around imagemin)
  // and then inline them as data64 URLs
  test: /\.(png|jpg|svg)/,
  loaders: ['url', 'image-webpack'],
},
{
  // When you encounter SCSS files, parse them with node-sass, then pass autoprefixer on them
  // then return the results as a string of CSS
  test: /\.scss/,
  loaders: ['css', 'autoprefixer', 'sass'],
}

/*

Ultimately at the end of the food chain all loaders return strings. 
This allows Webpack to wrap them into Javascript modules.


 */