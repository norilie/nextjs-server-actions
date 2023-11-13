import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { PrismaClient } from '@prisma/client'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

export default async function TodosPage() {
  const todos = await prisma.todos.findMany()
  const addTodo = async (formData: FormData) => {
    'use server'
    const content = formData.get('content')
    await prisma.todos.create({
      data: {
        content: content as string,
      },
    })
    revalidatePath('/todos')
  }
  return (
    <>
      <Stack>
        <Box display='flex' justifyContent='center' alignItems='center' height='200px'>
          <Typography variant='h3' fontWeight='bold'>
            Todos Page
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ mb: 2 }}>
          <form action={addTodo}>
            <Stack>
              <TextField
                id='basic'
                type='text'
                name='content'
                label='input todo'
                placeholder='Write your todo...'
                variant='outlined'
                size='small'
                required
                fullWidth
                sx={{ m: 1, width: '30ch' }}
              />
              <Button variant='contained' sx={{ m: 1 }} type='submit'>
                Add
              </Button>
            </Stack>
          </form>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <List>
            {todos.map(todo => (
              <div key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItem key={todo.id}>{todo.content}</ListItem>
              </div>
            ))}
          </List>
        </Box>
      </Stack>
    </>
  )
}
