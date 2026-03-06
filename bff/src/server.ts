import { app } from './app';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 ShopFlow BFF running on http://localhost:${PORT}`);
});
