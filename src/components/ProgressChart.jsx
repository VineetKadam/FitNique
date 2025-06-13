import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Jan 1", weight: 75, bodyFat: 18 },
  { date: "Jan 8", weight: 74.5, bodyFat: 17.8 },
  { date: "Jan 15", weight: 74.2, bodyFat: 17.5 },
  { date: "Jan 22", weight: 73.8, bodyFat: 17.2 },
  { date: "Jan 29", weight: 73.5, bodyFat: 17.0 },
  { date: "Feb 5", weight: 73.2, bodyFat: 16.8 },
  { date: "Feb 12", weight: 72.8, bodyFat: 16.5 },
]

const ProgressChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="date" className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
          <YAxis
            className="text-xs fill-muted-foreground"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}kg`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Weight</span>
                        <span className="font-bold text-muted-foreground">{payload[0].value}kg</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Body Fat</span>
                        <span className="font-bold">{payload[1].value}%</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
          />
          <Line
            type="monotone"
            dataKey="bodyFat"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: "hsl(var(--secondary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProgressChart
