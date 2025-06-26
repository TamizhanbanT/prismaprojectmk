import express from "express";
import * as bookController from "./bookController";

const router = express.Router();

// Create book
router.post("/", bookController.createBook);

// Read all book
router.get("/", bookController.getAllBook);

