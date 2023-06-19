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

export default function RecoveryCodeCard() {
  const searchParams = useSearchParams()

  const email = searchParams.get('email')

  const [code, setCode] = useState('')

  const router = useRouter()

  function CheckCode() {
    if (!code) {
      toast.error('Preencha o campo do código !')
      return
    }

    api
      .post('/checkRecoveryCode', { code })
      .then((response) => {
        router.push(`password?code=${code}&email=${email}`)
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
            label='Código'
            placeholder='Código de recuperação'
            getValue={(value) => setCode(value)}
          ></Input>
        </div>
        <div className='form-control mt-6 gap-y-2'>
          <Button onClick={CheckCode} className='btn btn-secondary w-full'>
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
