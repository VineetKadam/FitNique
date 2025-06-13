"use client"

import { Plus, MessageCircle, Trophy, Users } from "lucide-react"
import { useState } from "react"
import CommunityFeed from "../components/CommunityFeed"
import Leaderboard from "../components/Leaderboard"
import Achievements from "../components/Achievements"

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed")

  const stats = {
    members: 12847,
    postsToday: 156,
    yourRank: 247,
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Connect with fellow fitness enthusiasts and share your journey</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </button>
      </div>

      {/* Community Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Community Members</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.members.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">+234 this week</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Posts Today</h3>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.postsToday}</div>
          <p className="text-xs text-muted-foreground">+12% from yesterday</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Your Rank</h3>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">#{stats.yourRank}</div>
          <p className="text-xs text-muted-foreground">+15 positions this week</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="tabs">
            <div className="tabs-list">
              <button
                className={`tabs-trigger ${activeTab === "feed" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("feed")}
              >
                Feed
              </button>
              <button
                className={`tabs-trigger ${activeTab === "following" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("following")}
              >
                Following
              </button>
              <button
                className={`tabs-trigger ${activeTab === "trending" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("trending")}
              >
                Trending
              </button>
            </div>

            {activeTab === "feed" && (
              <div className="space-y-6">
                <CommunityFeed />
              </div>
            )}

            {activeTab === "following" && (
              <div className="space-y-6">
                <CommunityFeed filter="following" />
              </div>
            )}

            {activeTab === "trending" && (
              <div className="space-y-6">
                <CommunityFeed filter="trending" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Leaderboard />
          <Achievements />
        </div>
      </div>
    </div>
  )
}

export default Community
