var path = require('path');

var appRoot = path.join(__dirname, '/src');


module.exports = {
	entry:path.join(appRoot,'./main.js'),
	output :{
		path: path.join(__dirname,'./dist'),
		publicPath:'./',
		filename:'[name].js'
	},
	
	module:{
		loaders:[
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	}
};

