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

shelfiesAmazonLinker()

```


## CLI

```sh
$ npm install --global shelfies-amazon-linker
```

```sh
$ shelfies-amazon-linker --help

  Example
    shelfies-amazon-linker
    
```


## License

MIT © [Matias Singers](http://mts.io)
