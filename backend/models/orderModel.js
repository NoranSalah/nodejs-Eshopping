import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    shippingAddress: {
        type: String,
        required: true
    },

    paymentMethod: {
      type: String, required: true
    },

    itemsPrice: {
      type: Number, required: true
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', required: true },


  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;
