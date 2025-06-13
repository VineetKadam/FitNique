import { Clock, Zap, Calendar } from "lucide-react"

const workouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: "Today",
    duration: 45,
    calories: 320,
    exercises: 8,
    status: "completed",
  },
  {
    id: 2,
    name: "HIIT Cardio",
    date: "Yesterday",
    duration: 30,
    calories: 280,
    exercises: 6,
    status: "completed",
  },
  {
    id: 3,
    name: "Leg Day",
    date: "2 days ago",
    duration: 60,
    calories: 420,
    exercises: 10,
    status: "completed",
  },
  {
    id: 4,
    name: "Core & Flexibility",
    date: "3 days ago",
    duration: 25,
    calories: 150,
    exercises: 5,
    status: "completed",
  },
]

const RecentWorkouts = () => {
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{workout.name}</h4>
              <span className="badge badge-secondary">{workout.status}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {workout.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {workout.duration}min
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                {workout.calories} cal
              </div>
              <span>{workout.exercises} exercises</span>
            </div>
          </div>
          <button className="btn btn-outline btn-sm">View Details</button>
        </div>
      ))}
    </div>
  )
}

export default RecentWorkouts
