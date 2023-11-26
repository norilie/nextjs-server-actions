'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

export const addTodo = async (formData: FormData) => {
  const content = formData.get('content')
  await prisma.todos.create({
    data: {
      content: content as string,
    },
  })
  revalidatePath('/todos')
}
