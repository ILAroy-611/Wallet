import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Chart({ data, areaDataKey, xDatakey, yDatakey, frequency }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fadcd2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fadcd2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dot={{ stroke: "goldenRod", strokeWidth: 1 }}
          stroke="goldenRod"
          dataKey={areaDataKey}
          type="monotone"
          fillOpacity={1}
          fill="url(#colorUv)"
        ></Area>
        <XAxis
          dataKey={xDatakey}
          allowDuplicatedCategory={frequency === 7 ? false : true}
        />
        <YAxis dataKey={yDatakey} />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
