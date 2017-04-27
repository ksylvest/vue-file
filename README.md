# Vue File

## Installation

TODO

## Integration

Integrating Vue File as a directive is simple:

```html
<div id="app">
  <form>
    <input v-file:selected="selected" type="file" multiple accept="image/gif, image/jpg, image/jpeg, image/png">
    <button
  </form>
</div>
```

```javascript
const request = require('request');

var app = new Vue({
  el: "#app",
  data: {
    selections: [],
  },
  methods: {
    selected: function (file, data) {
      this.selections.push({ file: file, data: data });
    },
    save: function () {

    },
  },
});


request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

```

### Integration with Amazon Simple Storage Solution

To support direct to Amazon Simple Storage Solution a 'Pre-Signed URL' is required. Pre-Signed URLs must be generated on a server:

#### Ruby

```ruby
require 'fog'

storage = Fog::Storage.new(
  provider: 'AWS',
  aws_access_key_id: '...',
  aws_secret_access_key: '...',
)

url = storage.put_object_url(bucket = "...", path = "#{SecureRandom.uuid}.txt", expires = 2.hours)
```



### Integration with Google Cloud Storage

TODO

### Integration with Rackspace Cloud Files

TODO

### Integration with Generic Web Servers

TODO

## Configuration

## Copyright

Copyright (c) 2017 Kevin Sylvestre. See LICENSE for details.
