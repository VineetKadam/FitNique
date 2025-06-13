const templates = [
  {
    name: "Push Day",
    description: "Chest, shoulders, and triceps focused workout",
    exercises: 8,
    duration: "45-60 min",
    difficulty: "Intermediate",
  },
  {
    name: "Pull Day",
    description: "Back and biceps focused workout",
    exercises: 7,
    duration: "45-60 min",
    difficulty: "Intermediate",
  },
  {
    name: "Leg Day",
    description: "Complete lower body workout",
    exercises: 10,
    duration: "60-75 min",
    difficulty: "Advanced",
  },
  {
    name: "HIIT Cardio",
    description: "High intensity interval training",
    exercises: 6,
    duration: "20-30 min",
    difficulty: "Beginner",
  },
  {
    name: "Full Body",
    description: "Complete body workout for beginners",
    exercises: 12,
    duration: "45-60 min",
    difficulty: "Beginner",
  },
  {
    name: "Core Blast",
    description: "Focused core strengthening routine",
    exercises: 8,
    duration: "20-30 min",
    difficulty: "Intermediate",
  },
]

const WorkoutTemplates = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template, index) => (
        <div key={index} className="card hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <span className="badge badge-outline">{template.difficulty}</span>
            </div>
            <p className="text-muted-foreground mb-4">{template.description}</p>
            <div className="flex justify-between text-sm text-muted-foreground mb-4">
              <span>{template.exercises} exercises</span>
              <span>{template.duration}</span>
            </div>
            <button className="btn btn-primary w-full">Use Template</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkoutTemplates
