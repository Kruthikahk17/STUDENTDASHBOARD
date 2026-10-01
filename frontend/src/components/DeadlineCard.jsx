function DeadlineCard({ title, subject, date }) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">

      <div>
        <h3 className="font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {subject}
        </p>
      </div>

      <span className="rounded-lg bg-pink-100 px-3 py-2 text-sm font-semibold text-pink-600">
        {date}
      </span>

    </div>
  );
}

export default DeadlineCard;