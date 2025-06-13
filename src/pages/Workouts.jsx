"use client"

import { useState } from "react"
import { Plus, Search, Filter, Clock, Zap, Target } from "lucide-react"
import ExerciseLibrary from "../components/ExerciseLibrary"
import WorkoutHistory from "../components/WorkoutHistory"
import WorkoutTemplates from "../components/WorkoutTemplates"

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("library")

  const stats = {
    weeklyWorkouts: 4,
    totalMinutes: 180,
    caloriesBurned: 1240,
    personalRecords: 3,
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Workouts</h1>
          <p className="text-muted-foreground">Track your exercises and build custom workouts</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Workout
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">This Week</h3>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.weeklyWorkouts} workouts</div>
          <p className="text-xs text-muted-foreground">{stats.totalMinutes} minutes total</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Calories Burned</h3>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.caloriesBurned.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">This week</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Personal Records</h3>
            <Target className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.personalRecords} new</div>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <div className="tabs-list">
          <button
            className={`tabs-trigger ${activeTab === "library" ? "data-[state=active]" : ""}`}
            onClick={() => setActiveTab("library")}
          >
            Exercise Library
          </button>
          <button
            className={`tabs-trigger ${activeTab === "history" ? "data-[state=active]" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            Workout History
          </button>
          <button
            className={`tabs-trigger ${activeTab === "templates" ? "data-[state=active]" : ""}`}
            onClick={() => setActiveTab("templates")}
          >
            Templates
          </button>
        </div>

        {activeTab === "library" && (
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input placeholder="Search exercises..." className="input pl-10" />
              </div>
              <button className="btn btn-outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </button>
            </div>
            <ExerciseLibrary />
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-6">
            <WorkoutHistory />
          </div>
        )}

        {activeTab === "templates" && (
          <div className="space-y-6">
            <WorkoutTemplates />
          </div>
        )}
      </div>
    </div>
  )
}

export default Workouts
