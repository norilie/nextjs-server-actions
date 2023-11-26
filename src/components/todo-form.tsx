'use client'

import { addTodo } from '@/actions/actions'
import { Stack, TextField } from '@mui/material'
import { useRef } from 'react'
import Button from './button'

const TodoForm = () => {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async formData => {
        ref.current?.reset()
        await addTodo(formData)
      }}
    >
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
        <Button />
      </Stack>
    </form>
  )
}

export default TodoForm
