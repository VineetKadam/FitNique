import { Link } from "react-router-dom"
import { ArrowRight, Play, Star, Dumbbell, Target, Users, TrendingUp } from "lucide-react"

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="badge badge-secondary">🚀 Your Fitness Journey Starts Here</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Transform Your Body, <span className="text-primary">Transform Your Life</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Track workouts, monitor nutrition, set goals, and connect with a community of fitness enthusiasts.
                  Everything you need for your fitness journey in one place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/workouts" className="btn btn-outline btn-lg">
                  <Play size={16} className="mr-2" />
                  View Workouts
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Workouts Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-muted-foreground">Exercise Library</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop"
                  alt="Fitness App Dashboard"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="badge badge-outline">Features</div>
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and features designed to help you achieve your fitness goals faster and more
              effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Workout Tracking</h3>
              <p className="text-muted-foreground">Log exercises, sets, reps, and track your progress over time</p>
            </div>

            <div className="card p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Goal Setting</h3>
              <p className="text-muted-foreground">Set and track fitness goals with detailed progress monitoring</p>
            </div>

            <div className="card p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Analytics</h3>
              <p className="text-muted-foreground">Detailed charts and insights into your fitness journey</p>
            </div>

            <div className="card p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">Connect with others, share achievements, and stay motivated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="badge badge-outline">Workout Categories</div>
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Training Style</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From strength training to cardio, find the perfect workout for your fitness level and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strength Training",
                description: "Build muscle and increase strength with targeted resistance exercises",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=200&fit=crop",
                exercises: "45+ exercises",
              },
              {
                title: "Cardio Workouts",
                description: "Improve cardiovascular health and burn calories effectively",
                image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300&h=200&fit=crop",
                exercises: "30+ exercises",
              },
              {
                title: "Flexibility & Yoga",
                description: "Enhance mobility, balance, and mental well-being",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop",
                exercises: "25+ exercises",
              },
            ].map((category, index) => (
              <div key={index} className="card overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="badge badge-default absolute top-4 left-4">{category.exercises}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Fitness Journey?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users who have transformed their lives with FitTrack. Start tracking your workouts,
                nutrition, and progress today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn btn-primary btn-lg">
                Start Free Trial <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/community" className="btn btn-outline btn-lg">
                Join Community
              </Link>
            </div>

            <div className="flex items-center justify-center gap-1 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
