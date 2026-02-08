import Event from "../models/event.model.js";

/* CREATE EVENT */
export const createEvent = async (data, organizerId) => {
  return Event.create({
    ...data,
    organizer: organizerId,
  });
};

/* UPDATE EVENT */
export const updateEvent = async (eventId, data, userId) => {
  const event = await Event.findOne({
    _id: eventId,
    organizer: userId,
  });

  if (!event) {
    throw new Error("Event not found or unauthorized");
  }

  Object.assign(event, data);
  return event.save();
};

/* PUBLISH / UNPUBLISH */
export const changeEventStatus = async (eventId, userId, status) => {
  const event = await Event.findOne({
    _id: eventId,
    organizer: userId,
  });

  if (!event) {
    throw new Error("Event not found or unauthorized");
  }

  event.status = status;
  return event.save();
};

/* LIST EVENTS */
export const getAllEvents = async (role, userId) => {
    console.log(role,userId)
  if (role === "admin") {
    return await Event.find();
  }
  if (role === "organizer") {
    return await Event.find({ organizer: userId });
  }

  // USER
  return await Event.find({ status: "Approved" });
};
