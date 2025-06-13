import { Plus } from "lucide-react"

const exercises = [
  {
    id: 1,
    name: "Push-ups",
    category: "Strength",
    muscleGroups: ["Chest", "Shoulders", "Triceps"],
    equipment: "Bodyweight",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Squats",
    category: "Strength",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: "Bodyweight",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Deadlifts",
    category: "Strength",
    muscleGroups: ["Hamstrings", "Glutes", "Back"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Running",
    category: "Cardio",
    muscleGroups: ["Legs", "Heart"], // Assuming muscle groups for running
    equipment: "Bodyweight",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1510557884653-1c8636c76199?w=100&h=100&fit=crop",
  },
]

export default function ExerciseLibrary() {
  return (
    <div>
      <h1>Exercise Library</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <img src={exercise.image || "/placeholder.svg"} alt={exercise.name} />
            <h2>{exercise.name}</h2>
            <p>Category: {exercise.category}</p>
            <p>Muscle Groups: {exercise.muscleGroups.join(", ")}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Difficulty: {exercise.difficulty}</p>
          </li>
        ))}
      </ul>
      <button>
        <Plus />
        Add Exercise
      </button>
    </div>
  )
}
