import { Request, Response } from "express";
import * as bookService from "./bookServices";

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await bookService.createBook(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "Failed to create Book", error: err });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await bookService.getbookById(id);
  if (data) res.json(data);
  else res.status(404).json({ message: "Book not found" });
}

