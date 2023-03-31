const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());
const userRoute = require("./src/route/users/users.route")
const themeRoute = require("./src/route/themes/themes.route")
const topicRoute = require("./src/route/topics/topics.route")
app.get('/', function (req, res) {
  res.send('Hello World');
})


//Llamada a los routes de los UCs
userRoute(app);
themeRoute(app);
topicRoute(app);

app.listen(4000)