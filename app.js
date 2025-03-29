const express = require("express");
const cors = require("cors");
const { productModel } = require("./Models/productModel");
const { dbConnect } = require("./config/dbConnect");
const { router } = require("./routes/routes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.use("/", router);

(async () => {
  try {
    await productModel.sync({ force: false });
    console.log("ProductModel sync successfully");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(PORT, async () => {
  console.log(`Port is running on ${PORT}`);
  await dbConnect();
});
