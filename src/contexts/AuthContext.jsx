import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock user data for demo purposes
  const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
    height: 180,
    weight: 75.5,
    age: 28,
    fitnessLevel: "intermediate",
  }

  // Check if user is logged in on app start
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("user")
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    try {
      // Mock login - in real app, this would call your API
      if (email && password) {
        localStorage.setItem("user", JSON.stringify(mockUser))
        setUser(mockUser)
        return { success: true }
      } else {
        return { success: false, message: "Invalid credentials" }
      }
    } catch (error) {
      return { success: false, message: "Login failed" }
    }
  }

  const register = async (name, email, password) => {
    try {
      // Mock registration - in real app, this would call your API
      if (name && email && password) {
        const newUser = { ...mockUser, name, email }
        localStorage.setItem("user", JSON.stringify(newUser))
        setUser(newUser)
        return { success: true }
      } else {
        return { success: false, message: "All fields are required" }
      }
    } catch (error) {
      return { success: false, message: "Registration failed" }
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
