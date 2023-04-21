import express from 'express';

const app = express();

const port = process.env.PORT || 3330;

app.listen(port, ()=> console.log("server is running on port", port))