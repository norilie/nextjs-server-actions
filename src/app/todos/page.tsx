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
import TodoForm from '@/components/todo-form'
const prisma = new PrismaClient()

export default async function TodosPage() {
  const todos = await prisma.todos.findMany()

  return (
    <>
      <Stack>
        <Box display='flex' justifyContent='center' alignItems='center' height='200px'>
          <Typography variant='h3' fontWeight='bold'>
            Todos Page
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ mb: 2 }}>
          <TodoForm />
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
