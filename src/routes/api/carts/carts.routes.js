import { Router } from 'express';
import CartDao from '../../../daos/CartDao.js';

const cartRouter = Router();
const path = '/api/carts/';

//GET getAll
cartRouter.get(path, async (req, res) => {
  try {
    const carts = await CartDao.getAll();
    res.json(carts);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//GET getById
cartRouter.get(path + ':cartId', async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await CartDao.get(cartId);
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//POST createCart
cartRouter.post(path, async (req, res) => {
  try {
    const status = await CartDao.create();
    res.json(status);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//POST addProductToCart
cartRouter.post(path + ':cartId/products/:prodId', async (req, res) => {
  try {
    const { cartId, prodId } = req.params;
    const status = await CartDao.addProductToCart(cartId, prodId);
    res.json(status);
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
});

//PUT updateCartProducts
cartRouter.put(path + ':cartId', async (req, res) => {
  try {
    const data = req.body;
    const { cartId } = req.params;
    const cartUpdated = await CartDao.updateCartProducts(cartId, data);
    res.json(cartUpdated);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//PUT updateQuantity
cartRouter.put(path + ':cartId/products/:prodId', async (req, res) => {
  try {
    const { cartId, prodId } = req.params;
    const { quantity } = req.query;
    const updateQuantity = await CartDao.updateCartProductQuantity(cartId, prodId, quantity);
    res.json(updateQuantity);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//DELETE deleteProducts
cartRouter.delete(path + ':cartId', async (req, res) => {
  try {
    const { cartId } = req.params;
    const clearCart = await CartDao.clearProducts(cartId);
    res.json(clearCart);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//DELETE allCarts
cartRouter.delete(path, async (req, res) => {
  try {
    const { status } = req.query;
    if (!status || status !== 'true') {
      throw new Error('Status invalido');
    }
    const clearCart = await CartDao.clear();
    res.json(clearCart);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

export default cartRouter;
