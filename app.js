const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const translate = require('translate-google');

app.get('/', (req, res) => {
  // res.send('Webservice for Excel by @prasertcbs');
    res.sendFile(path.join(__dirname, '/about.html'));
//   res.send('translate');
});

/**
 * แปลงข้อความเป็นภาษาไทย
 * @example
 *  /th/life is beautify
 */
// app.get('/th/:text', async (req, res) => {
//   let x = await translate(req.params.text, { to: 'th' });
//   // console.log(x);
//   res.send(x);
// });

/**
 * แปลงข้อความเป็นภาษาอังกฤษ
 * @example
 *  /th/life is beautify
 */
// app.get('/en/:text', async (req, res) => {
//   let x = await translate(req.params.text, { to: 'en' });
//   // console.log(x);
//   res.send(x);
// });

app.get('/:lang/:text', async (req, res) => {
  let x = await translate(req.params.text, { to: req.params.lang });
  // console.log(x);
  res.send(x);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
