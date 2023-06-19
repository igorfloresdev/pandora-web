'use client'
import Link from 'next/link'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { setCookie } from '@/lib/cookie'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import Form from '../UI/Form'

export default function LoginCard() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function signIn() {
    if (!email || !password) {
      toast.error('Informe o email e a senha')
      return
    }

    const params = {
      email,
      password,
    }

    api
      .get('/user', { params })
      .then((response) => {
        toast.success('Login realizado com sucesso')
        setCookie('token', response.data.token)
        router.push('/web')
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
            getValue={(value) => setEmail(value)}
            type='email'
            label='Email'
            placeholder='Email'
          ></Input>
        </div>
        <div className='form-control'>
          <Input
            required
            getValue={(value) => setPassword(value)}
            type='password'
            label='Senha'
            placeholder='Senha'
          ></Input>
          <label className='label'>
            <Link
              href='/login/recovery'
              className='label-text-alt link link-hover'
            >
              Esqueci minha senha?
            </Link>
          </label>
        </div>
        <div className='form-control mt-6 gap-y-2'>
          <Link href={'/login/register'}>
            <Button className='btn btn-secondary w-full'>Cadastre-se</Button>
          </Link>
          <Button onClick={signIn}>Login</Button>
        </div>
      </Form>
    </Card>
  )
}
