Make your life easier when registering webhooks endpoints in Azure Event Grid

## Installation
```bash
$ npm install --save @gananda/eventgrid-endpoint-validate-middleware
```

## Usage
```javascript
const express = require('express');
const eventgridEndpointValidate = require('eventgridEndpointValidate');

const app = express();
app.use(express.json());
app.use(eventgridEndpointValidate);

// …
```

