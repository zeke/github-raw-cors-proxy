# github-raw-cors-proxy

Get raw json files from public github repos over CORS.

## jQuery/Zepto Example Usage

```js
$(function() {
  var url = "http://github-raw-cors-proxy.herokuapp.com/bestiejs/lodash/blob/master/package.json";
  return $.getJSON(url, function(package) {
    console.log(package);
  });
});
```