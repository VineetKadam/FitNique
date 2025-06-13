import { Target, TrendingDown, TrendingUp } from "lucide-react"

const goals = [
  {
    id: 1,
    title: "Lose 5kg",
    current: 3.2,
    target: 5,
    unit: "kg",
    progress: 64,
    status: "on_track",
    deadline: "Mar 15",
  },
  {
    id: 2,
    title: "Run 5K under 25min",
    current: 26.5,
    target: 25,
    unit: "min",
    progress: 85,
    status: "on_track",
    deadline: "Feb 28",
  },
  {
    id: 3,
    title: "Bench Press 80kg",
    current: 65,
    target: 80,
    unit: "kg",
    progress: 81,
    status: "ahead",
    deadline: "Apr 1",
  },
]

const GoalProgress = () => {
  return (
    <div className="space-y-6">
      {goals.map((goal) => (
        <div key={goal.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{goal.title}</span>
            </div>
            <div
              className={`badge flex items-center gap-1 ${
                goal.status === "ahead"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              }`}
            >
              {goal.status === "ahead" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {goal.status.replace("_", " ")}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {goal.current}
                {goal.unit} / {goal.target}
                {goal.unit}
              </span>
              <span className="text-muted-foreground">Due {goal.deadline}</span>
            </div>
            <div className="progress">
              <div className="progress-indicator" style={{ width: `${goal.progress}%` }}></div>
            </div>
            <div className="text-right text-sm font-medium">{goal.progress}% complete</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GoalProgress
