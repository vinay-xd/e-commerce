import express from 'express';
const app = express();
const PORT = 8090;




app.listen(PORT || 8085, () => {
    console.log(`Example app listening on port ${PORT}`);
    console.log('mongodb running');
  })