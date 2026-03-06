import cors from 'cors';
import express from 'express';
import { productsRoutes } from './routes/products.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    service: 'shopflow-bff',
  });
});

app.use('/products', productsRoutes);

export { app };
