'use strict';

var amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  awsTag: process.env.AWS_TAG
});

module.exports = function(title, cb) {
  client.itemSearch({
    keywords: title,
    searchIndex: 'Books',
    responseGroup: 'ItemAttributes'
  })
    .then(function(results) {
      var originalUrl = results[0].DetailPageURL[0];
      var fullTitle = results[0].ItemAttributes[0].Title[0];
      var authors = results[0].ItemAttributes[0].Author;

      var url = originalUrl.split('%3FSubscriptionId')[0].trim();

      var hasSubtitle = (fullTitle.indexOf(':') !== -1);
      var title = hasSubtitle ? fullTitle.split(':')[0].trim() : fullTitle;
      var subtitle = hasSubtitle ? fullTitle.split(':')[1].trim() : void 0;

      var markdownString = ['[', title, '](', url, ')'];
      if(subtitle){
        markdownString.push(' - *', subtitle, '*');
      }

      cb(null, {
        url: url,
        authors: authors,
        title: title,
        subtitle: subtitle,
        markdown: markdownString.join('')
      });
    })
    .catch(cb);
};
