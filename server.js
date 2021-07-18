const express = require('express');
const app = express();


app.use(express.static('./docs'));


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
