import { LoadingButton } from '@mui/lab'
import { useFormStatus } from 'react-dom'

export default function Button() {
  const { pending } = useFormStatus()
  return (
    <LoadingButton variant='contained' loading={pending} sx={{ m: 1 }} type='submit'>
      Add
    </LoadingButton>
  )
}
