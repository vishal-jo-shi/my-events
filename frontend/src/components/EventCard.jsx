import { Link } from "react-router-dom";
export default function EventCard({ event }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition">

      {/* Event Image Placeholder */}
      <div className="h-40 bg-primary-100 rounded-xl mb-4 flex items-center justify-center">
        <span className="text-primary-500 font-semibold">
          Event Image
        </span>
      </div>

      {/* Event Info */}
      <h3 className="text-lg font-semibold text-textMain">
        {event.title}
      </h3>

      <p className="text-textMuted text-sm mt-1">
        {event.date} • {event.location}
      </p>

      <p className="text-textMuted text-sm mt-3 line-clamp-2">
        {event.description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-accent-500 font-semibold text-sm">
          {event.status}
        </span>

         <Link
            to={`/event/${event.id}`}
            className="bg-primary-500 hover:bg-primary-600 
            text-white px-4 py-2 rounded-lg text-sm"
          >
            View Details
          </Link>
      </div>
    </div>
  );
}
