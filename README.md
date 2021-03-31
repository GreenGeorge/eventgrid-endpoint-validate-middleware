Make your life easier when registering webhooks endpoints in Azure Event Grid

## Installation
```bash
$ npm install --save @gananda/eventgrid-endpoint-validate-middleware
```

## Usage
When creating a subscription in Event Grid, it will check and validate your URL (The one you entered in the webhook URL part). Just use the middleware and it will handle validating with Event Grid for you.

```javascript
const express = require('express');
const eventgridEndpointValidate = require('@gananda/eventgrid-endpoint-validate-middleware');

const app = express();
app.use(express.json());
app.use(eventgridEndpointValidate);

// …
```

