"use client";
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ui/toggle-theme";
import { LogOut, ImageIcon, LayoutDashboardIcon } from "lucide-react"
import { UserButton, SignInButton, SignUpButton, useUser, useClerk } from "@clerk/nextjs"

export default function Navbar() {
    function UserProfileDropdown() {
        const { user } = useUser()
        const { signOut } = useClerk()
        const router = useRouter()
        const fileInputRef = useRef<HTMLInputElement>(null)
        const [isUploading, setIsUploading] = useState(false)

        const handleSignOut = async () => {
            await signOut()
            router.push("/")
        }

        const handleProfilePictureChange = () => {
            fileInputRef.current?.click()
        }

        const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0]
            if (!file || !user) return

            // Validate file type
            if (!file.type.startsWith("image/")) {
                toast.error("Please upload an image file (JPEG, PNG, etc.)")
                return
            }

            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size too large (max 5MB)")
                return
            }

            setIsUploading(true)
            try {
                // Use Clerk's built-in method to update profile picture
                await user.setProfileImage({ file })
                toast.success("Profile picture updated successfully!")
            } catch (error) {
                console.error("Error updating profile picture:", error)
                toast.error("Failed to update profile picture")
            } finally {
                setIsUploading(false)
                // Reset the file input
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                }
            }
        }

        if (!user) {
            return (
                <div className="flex items-center gap-2">
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm" className="text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/40">
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Sign Up
                        </Button>
                    </SignUpButton>
                </div>
            )
        }
        return (
            <>
                {/* Hidden file input for profile picture upload */}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/80 focus:ring-2 focus:ring-sky-500 backdrop-blur-sm"
                        >
                            <UserButton
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "h-10 w-10",
                                        userButtonPopoverActionButtonIcon: "hidden",
                                        userButtonPopoverActionButtonText: "text-xs",
                                        userButtonPopoverFooter: "hidden",
                                    },
                                }}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className=" backdrop-blur-md w-48"
                    >
                        <DropdownMenuItem
                            onClick={handleProfilePictureChange}
                            disabled={isUploading}
                        >
                            <ImageIcon className="mr-2 h-4 w-4" />
                            <span>{isUploading ? "Uploading..." : "Upload Picture"}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                            <Link href="/dashboard" target="_blank" className="flex items-center gap-2">
                                <span>Go to Dashboard</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleSignOut}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        )
    }
    return (
        <div className="flex flex-row justify-between gap-2 text-md p-5" id="navbar">
            <div className="font-semibold">SkillArc</div>
            <div className="flex flex-row gap-3">
                <a href="">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="flex flex-row gap-3">
                <UserProfileDropdown />
                <ModeToggle />
            </div>
        </div>
    );
}