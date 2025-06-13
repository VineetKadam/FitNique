import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", protein: 145, carbs: 220, fat: 65, calories: 2100 },
  { day: "Tue", protein: 138, carbs: 195, fat: 72, calories: 1980 },
  { day: "Wed", protein: 152, carbs: 240, fat: 68, calories: 2250 },
  { day: "Thu", protein: 141, carbs: 210, fat: 70, calories: 2080 },
  { day: "Fri", protein: 148, carbs: 225, fat: 66, calories: 2150 },
  { day: "Sat", protein: 135, carbs: 180, fat: 75, calories: 1920 },
  { day: "Sun", protein: 142, carbs: 203, fat: 67, calories: 1847 },
]

const MacroChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="day" className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
          <YAxis className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Protein</span>
                        <span className="font-bold text-muted-foreground">{payload[0].value}g</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Carbs</span>
                        <span className="font-bold">{payload[1].value}g</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Fat</span>
                        <span className="font-bold">{payload[2].value}g</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Calories</span>
                        <span className="font-bold">{payload[3]?.value}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar dataKey="protein" stackId="a" fill="hsl(var(--primary))" />
          <Bar dataKey="carbs" stackId="a" fill="hsl(var(--secondary))" />
          <Bar dataKey="fat" stackId="a" fill="hsl(var(--muted))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MacroChart
