# shelfies-amazon-linker [![Build Status](http://img.shields.io/travis/matiassingers/shelfies-amazon-linker.svg?style=flat-square)](https://travis-ci.org/matiassingers/shelfies-amazon-linker) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/shelfies-amazon-linker.svg?style=flat-square)](https://gemnasium.com/matiassingers/shelfies-amazon-linker)
> get markdown formatted string from book title

## Install

```sh
$ npm install --save shelfies-amazon-linker
```


## Usage

The [Amazon Product Advertising API](https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html) requires the following credentials to be passed with every single call:
- AWS access key ID - `AWS_ID`
- AWS secret access key - `AWS_SECRET`
- Amazon associate tag - `AWS_TAG`

shelfies-amazon-linker looks for these values in environment variables named: `AWS_ID`, `AWS_SECRET` and `AWS_TAG`. 
Please ensure that these are set before running the package.


```js
var shelfiesAmazonLinker = require('shelfies-amazon-linker');

shelfiesAmazonLinker('why nations fail', function(err, result){
  if(err){
    // handle the error
  }
  
  console.log(result);
  // => { url: 'http://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227',
  //      title: 'Why Nations Fail',
  //      subtitle: 'The Origins of Power, Prosperity, and Poverty',
  //      markdown: '[Why Nations Fail](http://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227) - *The Origins of Power, Prosperity, and Poverty*' }
});

```


## CLI

```sh
$ npm install --global shelfies-amazon-linker
```

The command-line tool joins every parameter into a string, allows the user to omit quotes around the search term.

```sh
$ shelfies-amazon-linker --help

  Example
    shelfies-amazon-linker why nations fail
    
    Looking up: "why nations fail"
    [Why Nations Fail](http://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227) - *The Origins of Power, Prosperity, and Poverty*
    
    Copied to your clipboard
    
```


## License

MIT © [Matias Singers](http://mts.io)
