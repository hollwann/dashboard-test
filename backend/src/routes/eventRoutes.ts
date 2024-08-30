import express from "express";
import EventController from "../controllers/eventController";

const router = express.Router();
const eventController = new EventController();

router.get("/events", eventController.getEvents);

export default router;
