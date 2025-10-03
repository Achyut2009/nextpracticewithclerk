"use client";

import { createUserMessage, deleteUserMessage } from '../app/database/actions'
import { db } from '../app/database/db'
import { auth } from '@clerk/nextjs/server'

export default async function Message() {
  const { isAuthenticated, userId } = await auth()
  if (!isAuthenticated) throw new Error('User not found')
  const existingMessage = await db.query.UserMessages.findFirst({
    where: (messages, { eq }) => eq(messages.user_id, userId),
  })

  return (
    <main>
      <h1>Neon + Clerk Example</h1>
      {existingMessage ? (
        <div>
          <p>{existingMessage.message}</p>
          <form action={deleteUserMessage}>
            <button>Delete Message</button>
          </form>
        </div>
      ) : (
        <form action={createUserMessage}>
          <input type="text" name="message" placeholder="Enter a message" />
          <button>Save Message</button>
        </form>
      )}
    </main>
  )
}