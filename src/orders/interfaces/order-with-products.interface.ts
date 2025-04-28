//import { OrderStatus } from '@prisma/client';

// enum OrderStatus {
//   PENDING,
//   DELIVERED,
//   CANCELLED
// }


export interface OrderWithProducts {
  OrderItem: {
    name: any;
    productId: number;
    quantity: number;
    price: number;
  }[];
  id: string;
  totalAmount: number;
  totalItems: number;
  status: any;
  paid: boolean;
  paidAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
