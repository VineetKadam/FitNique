"use client"

import { useState } from "react"
import { CalendarDays, Target, TrendingUp, Zap, Plus } from "lucide-react"
import ProgressChart from "../components/ProgressChart"
import RecentWorkouts from "../components/RecentWorkouts"
import GoalProgress from "../components/GoalProgress"

const Dashboard = () => {
  const [stats] = useState({
    weeklyWorkouts: 4,
    caloriesBurned: 2340,
    activeGoals: 3,
    streak: 12,
  })

  const achievements = [
    {
      id: 1,
      name: "Week Warrior",
      description: "Completed 7 workouts this week",
      icon: "💪",
      points: 50,
    },
    {
      id: 2,
      name: "Goal Getter",
      description: "Reached weight loss milestone",
      icon: "🎯",
      points: 100,
    },
    {
      id: 3,
      name: "Calorie Crusher",
      description: "Burned 500+ calories in one session",
      icon: "🔥",
      points: 25,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your fitness overview.</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          Quick Log
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">This Week</h3>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.weeklyWorkouts} workouts</div>
          <p className="text-xs text-muted-foreground">+2 from last week</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Calories Burned</h3>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.caloriesBurned.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">+180 from yesterday</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Active Goals</h3>
            <Target className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.activeGoals} goals</div>
          <p className="text-xs text-muted-foreground">2 on track, 1 behind</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: "67%" }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Streak</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.streak} days</div>
          <p className="text-xs text-muted-foreground">Personal best!</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Chart */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Progress Overview</h2>
              <p className="text-muted-foreground">Your fitness metrics over the last 30 days</p>
            </div>
            <ProgressChart />
          </div>

          {/* Recent Workouts */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Recent Workouts</h2>
              <p className="text-muted-foreground">Your latest training sessions</p>
            </div>
            <RecentWorkouts />
          </div>
        </div>

        <div className="space-y-6">
          {/* Goals Progress */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Goal Progress</h2>
              <p className="text-muted-foreground">Track your fitness objectives</p>
            </div>
            <GoalProgress />
          </div>

          {/* Recent Achievements */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Recent Achievements</h2>
              <p className="text-muted-foreground">Your latest milestones</p>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <span className="text-lg">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{achievement.name}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <div className="badge badge-secondary">+{achievement.points} pts</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
