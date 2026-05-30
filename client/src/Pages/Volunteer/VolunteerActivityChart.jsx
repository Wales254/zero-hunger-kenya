import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", deliveries: 3 },
  { day: "Tue", deliveries: 5 },
  { day: "Wed", deliveries: 2 },
  { day: "Thu", deliveries: 8 },
  { day: "Fri", deliveries: 6 },
];

export default function VolunteerActivityChart() {
  return (
    <div style={{ width: "100%", height: 300, background: "#fff", padding: 20, borderRadius: 12 }}>
      <h3>Weekly Activity</h3>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="deliveries" stroke="#22c55e" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}