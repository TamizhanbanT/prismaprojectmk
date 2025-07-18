import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './src/routes/bookRoute';



const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
