import { Trophy, Medal, Award } from "lucide-react"

const leaderboard = [
  {
    rank: 1,
    user: {
      name: "Alex Rodriguez",
      username: "@alexfitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    points: 2847,
    workouts: 28,
    streak: 15,
  },
  {
    rank: 2,
    user: {
      name: "Jessica Kim",
      username: "@jessicastrong",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    },
    points: 2634,
    workouts: 25,
    streak: 12,
  },
  {
    rank: 3,
    user: {
      name: "David Thompson",
      username: "@davidruns",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    points: 2521,
    workouts: 24,
    streak: 18,
  },
  {
    rank: 4,
    user: {
      name: "Maria Garcia",
      username: "@mariayoga",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    points: 2398,
    workouts: 22,
    streak: 9,
  },
  {
    rank: 5,
    user: {
      name: "John Smith",
      username: "@johnlifts",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    },
    points: 2287,
    workouts: 21,
    streak: 7,
  },
]

const Leaderboard = () => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case 2:
        return <Medal className="h-4 w-4 text-gray-400" />
      case 3:
        return <Award className="h-4 w-4 text-amber-600" />
      default:
        return <span className="text-sm font-bold">#{rank}</span>
    }
  }

  return (
    <div className="card p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Weekly Leaderboard</h2>
        </div>
        <p className="text-muted-foreground">Top performers this week</p>
      </div>
      <div className="space-y-4">
        {leaderboard.map((entry) => (
          <div key={entry.rank} className="flex items-center gap-3">
            <div className="w-8 flex justify-center">{getRankIcon(entry.rank)}</div>
            <img
              src={entry.user.avatar || "/placeholder.svg"}
              alt={entry.user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{entry.user.name}</div>
              <div className="text-sm text-muted-foreground">{entry.points} points</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{entry.workouts} workouts</div>
              <div className="badge badge-outline">{entry.streak} day streak</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
