import Event from "../models/event.model.js";

export const getOrganizerEventsController = async (req, res) => {
  const events = await Event.find({ organizer: req.user.id });

  res.status(200).json({
    success: true,
    events,
  });
};
