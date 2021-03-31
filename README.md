Make your life easier when registering webhooks endpoints in Azure Event Grid

## Installation
```bash
$ npm install --save greengeorge/eventgridEndpointValidate
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

