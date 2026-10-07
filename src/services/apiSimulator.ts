import type { ProductCatalog, ProductReview, SalesReport } from "../models/products.js";

export function fetchProductCatalog(): Promise<ProductCatalog[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          {id: 1, name: 'apple', price: 100},
          {id: 2, name: 'banana', price: 200},
          {id: 3, name: 'dog', price: 300},
        ]);
      } else {
        reject('Failed to fetch catalog for some reason');
      }
    }, 1000)
  })
}

export function fetchProductReviews(product: ProductCatalog[], productId: ProductCatalog['id']): Promise<ProductReview> {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        const productReviews: ProductReview[] = [
          { id: 1, rating: 5 },
          { id: 2, rating: 4.5 },
          { id: 3, rating: 3 },
        ]
        for (let i = 0; i < productReviews.length; i++) {
          if (productId == productReviews[i]?.id) {
            const review = productReviews[i]
            if (review) {
              resolve(review);
              return;
            }
          }
        }
        reject('Product Id does not exist')
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`)
      }
    }, 1500)
  })
}

export function fetchSalesReport(): Promise<SalesReport> {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.6) {
        const saleReport = {
          totalSales: 1000,
          unitsSold: 100,
          averagePrice: 100
        }
        resolve(saleReport);
      } else {
        reject('Luck is not on your side')
      }
    }, 1000)
  })
}

 