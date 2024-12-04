import express from "express";
import {
  createWatchListCtrl,
  editWatchListCtrl,
  getWatchListByIdCtrl,
  getAllUserWatchListCtrl,
} from "./controllers";
import {
  editWatchListValidator,
  getWatchListByIdValidator,
  watchListValidator,
  getAllUserWatchListValidator,
} from "../../utils/middlewares/validator";
const router = express.Router();

router.post("/create", watchListValidator, createWatchListCtrl);
router.put("/edit/:id", editWatchListValidator, editWatchListCtrl);
router.get("/:id", getWatchListByIdValidator, getWatchListByIdCtrl);
router.get(
  "/user/:userId",
  getAllUserWatchListValidator,
  getAllUserWatchListCtrl
);

export default router;
