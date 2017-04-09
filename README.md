# Vue File

## Installation

TODO

## Integration

Integrating Vue File as a directive is simple:

```html
<input v-file:selected="selected" type="file" multiple accept="image/gif, image/jpg, image/jpeg, image/png">
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
