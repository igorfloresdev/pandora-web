'use client'
import Link from 'next/link'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import api from '@/lib/api'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Form from '../UI/Form'

export default function RecoveryEmailCard() {
  const [email, setEmail] = useState('')

  const router = useRouter()

  function SendEmail() {
    if (!email) {
      toast.error('Preencha o campo de e-mail !')
      return
    }

    api
      .post('/recovery', { email })
      .then((response) => {
        router.push(`/login/recovery/code?email=${email}`)
        toast.success(response.data.message)
      })
      .catch((error) => {
        toast.error(error.response.data.message)
        return Promise.reject(error)
      })
  }
  return (
    <Card>
      <Form>
        <div className='form-control'>
          <Input
            required
            label='E-mail'
            type='email'
            placeholder='Email'
            getValue={(value) => setEmail(value)}
          ></Input>
        </div>
        <div className='form-control mt-6 gap-y-2'>
          <Button onClick={SendEmail} className='btn btn-secondary w-full'>
            Enviar
          </Button>
          <Link href={'/login'}>
            <Button className='btn btn-primary w-full'>Voltar</Button>
          </Link>
        </div>
      </Form>
    </Card>
  )
}
