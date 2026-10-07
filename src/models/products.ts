export interface ProductCatalog {
  id: number;
  name: string;
  price: number;
}

export interface ProductReview {
  id: number;
  rating: number;
}

export interface SalesReport {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}
