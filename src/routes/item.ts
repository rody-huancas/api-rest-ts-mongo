import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router();

/*
* https://localhost:3000/items [GET]
*/
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };