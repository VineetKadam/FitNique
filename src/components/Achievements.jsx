import { Award } from "lucide-react"

const achievements = [
  {
    id: 1,
    name: "Week Warrior",
    description: "Complete 7 workouts in a week",
    icon: "💪",
    category: "consistency",
    progress: 100,
    earned: true,
    points: 50,
  },
  {
    id: 2,
    name: "Social Butterfly",
    description: "Make 10 community posts",
    icon: "🦋",
    category: "community",
    progress: 70,
    earned: false,
    points: 30,
  },
  {
    id: 3,
    name: "Calorie Crusher",
    description: "Burn 1000 calories in a day",
    icon: "🔥",
    category: "workout",
    progress: 85,
    earned: false,
    points: 75,
  },
  {
    id: 4,
    name: "Consistency King",
    description: "30 day workout streak",
    icon: "👑",
    category: "consistency",
    progress: 40,
    earned: false,
    points: 200,
  },
]

const Achievements = () => {
  return (
    <div className="card p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Award className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Achievements</h2>
        </div>
        <p className="text-muted-foreground">Your fitness milestones</p>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{achievement.name}</span>
                  {achievement.earned && <span className="badge badge-default">Earned</span>}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <span className="badge badge-outline">+{achievement.points} pts</span>
            </div>
            {!achievement.earned && (
              <div className="ml-11">
                <div className="progress">
                  <div className="progress-indicator" style={{ width: `${achievement.progress}%` }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{achievement.progress}% complete</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
