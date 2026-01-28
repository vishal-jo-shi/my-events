export default function AllEvents() {
  const events = [
    { id: 1, title: "Tech Conference", organizer: "Org A", status: "Approved" },
    { id: 2, title: "Music Fest", organizer: "Org B", status: "Pending" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-textMain mb-6">
        All Events
      </h1>

      <div className="space-y-4">
        {events.map(e => (
          <div key={e.id} className="border border-border rounded-lg p-4 flex justify-between">
            <div>
              <p className="font-semibold">{e.title}</p>
              <p className="text-sm text-textMuted">Organizer: {e.organizer}</p>
            </div>
            <span className="text-primary-500">{e.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}
