import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  createOrUpdateOrder,
  checkoutOrder,
} from "../controllers/order.controller.js";
import { allowCheckout } from "../middlewares/rbac.middleware.js";

const router = express.Router();

router.post("/", protect, createOrUpdateOrder);
router.post("/checkout", protect, allowCheckout, checkoutOrder);

export default router;
