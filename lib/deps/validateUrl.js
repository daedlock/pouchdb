'use strict';

/**
 * Used in validating a url. Returns false if the url contains:
 *  - Any invalid characters
 *  - Any prototcol other than http, https
 *  - Invalid number of protocol slashes (eg: http:///)
 */
module.exports =   function validateUrl (url) {
  var validationRegex = /^(https?:\/\/(?:www\.|(?!www))[^\s\./]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/
  return validationRegex.test(url);
};
