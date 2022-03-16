import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.static('frontend'))

// start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);