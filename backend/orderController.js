// KantinGo - Order Controller Backend
// Copyright (c) 2025 John Doe
// Licensed under the MIT License

const orders = [];

function createOrder(req, res) {
  const { menu, jumlah } = req.body;
  orders.push({ menu, jumlah });
  res.status(201).json({ message: 'Pesanan berhasil dibuat!' });
}

function getOrders(req, res) {
  res.json(orders);
}

module.exports = { createOrder, getOrders };
