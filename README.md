Make your life easier when registering webhooks endpoints in Azure Event Grid

## Installation
```bash
$ npm install --save greengeorge/eventgridEndpointValidate
```

## Usage
```javascript
const eventgridEndpointValidate = require('eventgridEndpointValidate');

// …

app.post('/', [eventgridEndpointValidate, controller]);

// …
```

