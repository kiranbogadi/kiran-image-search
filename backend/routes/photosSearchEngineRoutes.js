import express from "express";
import { getImagesByQuery } from "../controllers/photosSearchEngineController.js";

const router = express.Router();

router.route("/:query").get(getImagesByQuery);

export default router;