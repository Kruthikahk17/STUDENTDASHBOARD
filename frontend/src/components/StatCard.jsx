function StatCard({
  title,
  value,
  description,
  icon,
  bg,
}) {
  return (
    <div className="stat-card">

      <div className="stat-content">

        <div>

          <p className="stat-title">
            {title}
          </p>

          <h2 className="stat-value">
            {value}
          </h2>

          <p className="stat-description">
            {description}
          </p>

        </div>

        <div className={`stat-icon ${bg}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;