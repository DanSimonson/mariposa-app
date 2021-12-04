import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Card from "../models/cardModel.js";

const cardRouter = express.Router();

cardRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const cards = await Card.find({});
    res.send(cards);
  })
);

cardRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Card.remove({});
    const createCards = await Card.insertMany(data.cards);
    res.send({ createCards });
  })
);

cardRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id);
    if (card) {
      res.send(card);
    } else {
      res.status(404).send({ message: "Card Not Found" });
    }
  })
);

export default cardRouter;
