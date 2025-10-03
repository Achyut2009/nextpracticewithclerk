"use server";
import { auth, currentUser } from '@clerk/nextjs/server'
import { createUserMessage, deleteUserMessage } from '../database/actions';
import { db } from '../database/db'
import { Skeleton } from "@/components/ui/skeleton"

export default async function Page() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated, userId } = await auth()

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  // Use `user` to render user details or create UI elements
  return(
    <div className="flex flex-row gap-5 p-10">
        <Skeleton className='h-screen w-[250px] rounded - xl'></Skeleton>
        <div className='flex flex-col space-y-5'>
            <Skeleton className="h-[125px] w-4xl rounded-xl" />
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <Skeleton className="h-[125px] w-full rounded-xl" />
        </div>
    </div>
  );
}