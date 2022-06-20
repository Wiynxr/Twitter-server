const express = require("express")
const mongoose = require("mongoose")


const app = express()


app.use(express.json())
app.use(require("./route/comment.router"))
app.use(require("./route/twit.route"))
app.use(require("./route/user.route"))

mongoose
  .connect(
    "mongodb+srv://fringle:12345@cluster0.wgisrd8.mongodb.net/twitter",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4242, () => {
  console.log(`Для подключения перейдите на хост http://localhost:${4242}`);
});