import { Plus, Target, TrendingUp, Calendar, CheckCircle } from "lucide-react"
import GoalsList from "../components/GoalsList"
import GoalProgress from "../components/GoalProgress"

const Goals = () => {
  const stats = {
    activeGoals: 3,
    completed: 7,
    successRate: 78,
    nextDeadline: 12,
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Goals</h1>
          <p className="text-muted-foreground">Set and track your fitness objectives</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Goal
        </button>
      </div>

      {/* Goals Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Active Goals</h3>
            <Target className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.activeGoals}</div>
          <p className="text-xs text-muted-foreground">2 on track, 1 behind</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Completed</h3>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.completed}</div>
          <p className="text-xs text-muted-foreground">This year</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Success Rate</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.successRate}%</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Next Deadline</h3>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.nextDeadline}</div>
          <p className="text-xs text-muted-foreground">days remaining</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GoalsList />
        </div>
        <div>
          <GoalProgress />
        </div>
      </div>
    </div>
  )
}

export default Goals
