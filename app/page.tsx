"use client";

import DashBoardHeader from "@/components/DashboardHeader/DashboardHeader ";
import Header from "@/components/Header";
import KanbanBoard from "@/components/KanbanBoard";

export default function LoginPage() {
  
  return (
    <div>
      <Header/>
      <DashBoardHeader/>
      <KanbanBoard/>
    </div>
    
  );
}
