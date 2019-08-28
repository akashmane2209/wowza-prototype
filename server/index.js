const express = require("express");
const cors = require("cors");
const router = express.Router();

const app = express();
const PORT = 4000;

app.use(cors());

// routes

router.route("/").get(async (req, res) => {
    return res.json({ message: "get videos" });
});

app.use("/", router);

app.listen(PORT, () => {
    console.log("server started on " + PORT);
});
