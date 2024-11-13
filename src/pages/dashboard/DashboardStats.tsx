const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl my-16 p-8">
      <div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="border-l-4 border-blue-500 py-2 px-4">
            <div className="text-gray-500 text-sm truncate">New Clients</div>
            <div className="text-2xl font-semibold">9,123</div>
          </div>
          <div className="border-l-4 border-red-500 py-2 px-4">
            <div className="text-gray-500 text-sm truncate">
              Recurring Clients
            </div>
            <div className="text-2xl font-semibold">22,643</div>
          </div>
        </div>

        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, index) => (
          <div className="mb-4" key={index}>
            <div className="text-gray-500 text-sm">{day}</div>
            <div className="space-y-1">
              <div className="w-full bg-gray-200 rounded h-1">
                <div
                  className="bg-blue-500 h-1 rounded"
                  style={{ width: `${[34, 56, 12, 43, 22, 53, 9][index]}%` }}
                ></div>
              </div>
              <div className="w-full bg-gray-200 rounded h-1">
                <div
                  className="bg-red-500 h-1 rounded"
                  style={{ width: `${[78, 94, 67, 91, 73, 82, 69][index]}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="border-l-4 border-yellow-500 py-2 px-4">
            <div className="text-gray-500 text-sm truncate">Pageviews</div>
            <div className="text-2xl font-semibold">78,623</div>
          </div>
          <div className="border-l-4 border-green-500 py-2 px-4">
            <div className="text-gray-500 text-sm truncate">Organic</div>
            <div className="text-2xl font-semibold">49,123</div>
          </div>
        </div>

        {[
          { label: "Male", percentage: 53, color: "bg-yellow-500" },
          { label: "Female", percentage: 47, color: "bg-orange-500" },
        ].map((item, index) => (
          <div className="mb-4" key={index}>
            <div className="flex justify-between items-center">
              <span>{item.label}</span>
              <span className="font-semibold">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-1">
              <div
                className={`${item.color} h-1 rounded`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}

        {[
          {
            label: "Organic Search",
            value: 191235,
            percentage: 56,
            color: "bg-green-500",
          },
          {
            label: "Facebook",
            value: 51223,
            percentage: 15,
            color: "bg-blue-500",
          },
          {
            label: "Twitter",
            value: 37564,
            percentage: 11,
            color: "bg-blue-400",
          },
          {
            label: "LinkedIn",
            value: 27319,
            percentage: 8,
            color: "bg-blue-700",
          },
        ].map((source, index) => (
          <div className="mb-4" key={index}>
            <div className="flex justify-between items-center">
              <span>{source.label}</span>
              <span className="font-semibold">
                {source.value.toLocaleString()}{" "}
                <span className="text-gray-500 text-sm">
                  ({source.percentage}%)
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded h-1">
              <div
                className={`${source.color} h-1 rounded`}
                style={{ width: `${source.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
