"use client"

import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      username: "@sarahj_fit",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    content:
      "Just completed my first 5K run! 🏃‍♀️ Started from barely being able to run 1K three months ago. The journey has been incredible and I'm so grateful for this amazing community that kept me motivated! #FirstRace #Running #FitnessJourney",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    workout: {
      name: "5K Morning Run",
      duration: 28,
      calories: 320,
    },
    likes: 47,
    comments: 12,
    shares: 3,
    timestamp: "2 hours ago",
    achievements: ["First 5K", "Consistency King"],
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      username: "@mikelifts",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    content:
      "New PR on deadlifts today! 💪 Finally hit 180kg after months of progressive training. Remember, consistency beats perfection every time. What's your current PR?",
    workout: {
      name: "Deadlift Day",
      duration: 75,
      calories: 450,
    },
    likes: 89,
    comments: 23,
    shares: 8,
    timestamp: "4 hours ago",
    achievements: ["Personal Record", "Strength Master"],
  },
  {
    id: 3,
    user: {
      name: "Emma Wilson",
      username: "@emmawellness",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    content:
      "Meal prep Sunday is done! 🥗 This week's menu includes quinoa bowls, grilled chicken, and lots of colorful veggies. Preparation is key to staying on track with nutrition goals. What's your favorite meal prep recipe?",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    likes: 34,
    comments: 8,
    shares: 15,
    timestamp: "6 hours ago",
    achievements: ["Nutrition Tracker"],
  },
]

const CommunityFeed = ({ filter = "all" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={post.user.avatar || "/placeholder.svg"}
                alt={post.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{post.user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.user.username} • {post.timestamp}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                className="btn btn-ghost btn-icon"
                onClick={() => setDropdownOpen(dropdownOpen === post.id ? null : post.id)}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {dropdownOpen === post.id && (
                <div className="dropdown-menu absolute right-0 top-full mt-1 w-48">
                  <button className="dropdown-menu-item w-full text-left">Follow User</button>
                  <button className="dropdown-menu-item w-full text-left">Save Post</button>
                  <button className="dropdown-menu-item w-full text-left">Report</button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <p>{post.content}</p>

            {post.image && (
              <img
                src={post.image || "/placeholder.svg"}
                alt="Post image"
                className="rounded-lg object-cover w-full h-64"
              />
            )}

            {post.workout && (
              <div className="card bg-muted/50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{post.workout.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {post.workout.duration}min • {post.workout.calories} calories
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">View Workout</button>
                </div>
              </div>
            )}

            {post.achievements && post.achievements.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.achievements.map((achievement) => (
                  <span key={achievement} className="badge badge-secondary">
                    🏆 {achievement}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-4">
                <button className="btn btn-ghost btn-sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {post.likes}
                </button>
                <button className="btn btn-ghost btn-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {post.comments}
                </button>
                <button className="btn btn-ghost btn-sm">
                  <Share className="h-4 w-4 mr-2" />
                  {post.shares}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommunityFeed
