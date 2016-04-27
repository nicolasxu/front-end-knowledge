/*
Now in order to tell Webpack to “pipe” things from one loader to another we 
simply pass a series of loaders, from right to left, separated by a !. 
Alternatively you can use an array by using the loaders attribute instead of loader:
 */
{
    test:    /\.js/,
    loader:  'babel',
    include: __dirname + '/src',
},
{
    test:   /\.scss/,
    loader: 'style!css!sass',
    // Or
    loaders: ['style', 'css', 'sass'],
},
{
    test:   /\.html/,
    loader: 'html',
}