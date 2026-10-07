import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './services/apiSimulator.js'

async function renderData(productId: number) {
  try {
    const prodCatalog = await fetchProductCatalog();
    console.log(prodCatalog);

    const prodReviews = await fetchProductReviews(prodCatalog, productId);
    console.log(prodReviews);

    const prodReport = await fetchSalesReport();
    console.log(prodReport);
  } catch (error) {
    console.error('Something went terribly wrong:', error);
  } finally {
    console.log("All Api calls have been attempted!");
  }
}

renderData(3);