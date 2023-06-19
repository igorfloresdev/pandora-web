'use client'
import Link from 'next/link'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import api from '@/lib/api'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Form from '../UI/Form'

export default function RecoveryPasswordCard() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const email = searchParams.get('email')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function changePassword() {
    if (!password) {
      toast.error('Preencha o campo da senha !')
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
      .post('/resetPassword', {
        email,
        password,
        code,
      })
      .then((response) => {
        router.push('/login')
        toast.success('Senha alterada com sucesso!')
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
            type='password'
            label='Senha'
            placeholder='Senha'
            getValue={(value) => setPassword(value)}
          ></Input>
        </div>
        <div className='form-control'>
          <Input
            required
            type='password'
            label='Confirmar senha'
            placeholder='Confirmar senha'
            getValue={(value) => setConfirmPassword(value)}
          ></Input>
        </div>
        <div className='form-control mt-6 gap-y-2'>
          <Button onClick={changePassword} className='btn btn-secondary w-full'>
            Próximo
          </Button>
          <Link href={'/login/recovery'}>
            <Button className='btn btn-primary w-full'>Voltar</Button>
          </Link>
        </div>
      </Form>
    </Card>
  )
}
