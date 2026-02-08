import eventModel from "../models/event.model.js";
import {
  createEvent,
  updateEvent,
  changeEventStatus,
  getAllEvents,
} from "../services/event.service.js";

/* CREATE */
export const createEventController = async (req, res,next) => {
  try {
    const event = await createEvent(req.body, req.user.id);

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error)
    res.status(400).json({ message: "Error while creating the Event" });
  }
};

/* UPDATE */
export const updateEventController = async (req, res,next) => {
  try {
    const event = await updateEvent(
      req.params.id,
      req.body,
      req.user.id
    );

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error)
    res.status(403).json({ message: error.message });
  }
};

//Update event status
export const updateEventStatusController = async (req, res,next) => {
  try {
    const { status } = req.body;

    const event = await changeEventStatus(
      req.params.id,
      req.user.id,
      status
    );

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error)
    res.status(403).json({ message: error.message });
  }
};

/* LIST */
export const listEventsController = async (req, res, next) => {
  try {
    const role = req.user?.role;   // optional
    const userId = req.user?.id;   // optional (future use)

    const events = await getAllEvents(role, userId);

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    next(error);
  }
};
