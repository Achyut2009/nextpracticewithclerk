"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Page",
    url: "#",
  },
    {
    title: "Home1",
    url: "#",
  },
  {
    title: "Inbox1",
    url: "#",
  },
  {
    title: "Calendar1",
    url: "#",
  },
  {
    title: "Search1",
    url: "#",
  },
  {
    title: "Settings1",
    url: "#",
  },
  {
    title: "Page1",
    url: "#",
  },
    {
    title: "Home2",
    url: "#",
  },
  {
    title: "Inbox2",
    url: "#",
  },
  {
    title: "Calendar2",
    url: "#",
  },
  {
    title: "Search2",
    url: "#",
  },
  {
    title: "Settings2",
    url: "#",
  },
  {
    title: "Page2",
    url: "#",
  },
    {
    title: "Home4",
    url: "#",
  },
  {
    title: "Inbox4",
    url: "#",
  },
  {
    title: "Calendar4",
    url: "#",
  },
  {
    title: "Search4",
    url: "#",
  },
  {
    title: "Settings4",
    url: "#",
  },
  {
    title: "Page4",
    url: "#",
  },
  
]

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">Skill Arc</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="font-bold">
        <p className="text-xl text-center text-gray-400">
            SkillArc
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}