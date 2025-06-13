"use client"

import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useAuth } from "../contexts/AuthContext"

const Layout = () => {
  const { user } = useAuth()

  if (!user) {
    return <Outlet />
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
