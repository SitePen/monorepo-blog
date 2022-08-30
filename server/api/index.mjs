import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 9999;

app.get("/api", (req, res) => {
  res.json({
    title: "SitePen",
    url: "https://www.sitepen.com/",
    imageUrl: "https://images.sitepen.com/wp-images/2022/08/SitePenLogo_Light.svg",
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
