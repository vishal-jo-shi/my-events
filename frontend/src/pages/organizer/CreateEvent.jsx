import { useState } from "react";

export default function CreateEvent() {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const [maxCapacity, setMaxCapacity] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const [regDeadlineDate, setRegDeadlineDate] = useState("");
  const [regDeadlineTime, setRegDeadlineTime] = useState("");

  const [status, setStatus] = useState("Draft");

  const getMeridiem = (time) => {
    if (!time) return "";
    const hour = parseInt(time.split(":")[0], 10);
    return hour >= 12 ? "PM" : "AM";
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-textMain mb-6">
        Create Event
      </h1>

      <form className="space-y-6 max-w-2xl">

        {/* Event Title */}
        <div>
          <label className="label">Event Title</label>
          <input className="input" placeholder="Event title" />
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            className="input min-h-[120px]"
            placeholder="Event description"
          />
        </div>

        {/* Date & Time */}
        <div>
          <label className="label">Event Date & Time</label>
        </div>

        {/* Start Date & Time */}
        <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Start Date</label>
            <input
              type="date"
              className="input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="label">Start Time</label>
            <div className="relative">
              <input
                type="time"
                className="input pr-14"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              {startTime && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-textMuted">
                  {getMeridiem(startTime)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* End Date & Time */}
        <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label">End Date</label>
            <input
              type="date"
              className="input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div>
            <label className="label">End Time</label>
            <div className="relative">
              <input
                type="time"
                className="input pr-14"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              {endTime && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-textMuted">
                  {getMeridiem(endTime)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input className="input" placeholder="City / Venue" />
        </div>

        {/* Capacity */}
        <div>
          <label className="label">Max Capacity</label>
          <input
            type="number"
            className="input"
            min="1"
            placeholder="Total tickets available"
            value={maxCapacity}
            onChange={(e) => setMaxCapacity(e.target.value)}
          />
        </div>
        
        {/* Ticket Price */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="label">Ticket Price</label>
            <input
              type="number"
              className="input"
              min="0"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
              placeholder="0 for free"
            />
          </div>

          <div>
            <label className="label">Currency</label>
            <select
              className="input"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Registration Deadline */}
        <div>
          <label className="label">Registration Deadline</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="input"
              value={regDeadlineDate}
              onChange={(e) => setRegDeadlineDate(e.target.value)}
            />
            <input
              type="time"
              className="input"
              value={regDeadlineTime}
              onChange={(e) => setRegDeadlineTime(e.target.value)}
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="label">Event Status</label>
          <select
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Draft</option>
            <option>Published</option>
            <option>Sold Out</option>
            <option>Cancelled</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600
          text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Create Event
        </button>
      </form>
    </>
  );
}
