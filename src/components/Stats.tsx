const stats = [
  { label: "Completed Projects", value: "30+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Lines of Code", value: "1M+" },
  { label: "Coffees sipped", value: "999999+" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 appear appear-delay-2">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card p-4 text-center">
          <div className="text-2xl md:text-3xl font-display font-bold text-neon-green">
            {stat.value}
          </div>
          <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
