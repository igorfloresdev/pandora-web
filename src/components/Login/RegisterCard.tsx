'use client'
import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import api from '@/lib/api'
import { toast } from 'react-hot-toast'
import Card from '../UI/Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Form from '../UI/Form'

export default function RegisterCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const router = useRouter()

  function register(): void {
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Preencha todos os campos !')
      return
    }

    if (password.length < 8) {
      toast.error('A senha deve ter no mínimo 8 caracteres !')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Senha e Confirmar Senha não conferem !')
      return
    }

    api
      .post('/user', {
        name,
        email,
        password,
      })
      .then((response) => {
        toast.success(response.data.message)
        router.push('/')
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
            getValue={(value) => setName(value)}
            label='Nome'
            placeholder='Nome'
            required
          />
        </div>
        <div className='form-control'>
          <Input
            getValue={(value) => setEmail(value)}
            type='email'
            label='Email'
            placeholder='Email'
            required
          />
        </div>
        <div className='form-control'>
          <Input
            getValue={(value) => setPassword(value)}
            label='Senha'
            type='password'
            placeholder='Senha'
            required
          />
        </div>
        <div className='form-control'>
          <Input
            getValue={(value) => setConfirmPassword(value)}
            type='password'
            label='Confirmar Senha'
            placeholder='Confirmar Senha'
            required
          />
        </div>
        <div className='form-control mt-6 gap-y-2'>
          <Button onClick={register}>Cadastrar</Button>
          <Link href='/login'>
            <Button className='btn btn-secondary w-full'>Voltar</Button>
          </Link>
        </div>
      </Form>
    </Card>
  )
}
