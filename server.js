require("dotenv").config(); // ✅ load env vars FIRST

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/get-key", (req, res) => {
    const { message } = req.body;
    if (message === process.env.SECRET) {
        res.json({ key: process.env.SECRET_KEY });
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
