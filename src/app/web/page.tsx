'use client'
import Button from '@/components/UI/Button'
import { BiLogOutCircle } from 'react-icons/bi'
import { removeCookie } from '@/lib/cookie'
import { useRouter } from 'next/navigation'

export default function web() {
  const router = useRouter()

  function logout() {
    removeCookie('token')
    router.push('/login')
  }

  return (
    <div className='flex flex-col text-center p-8 justify-center items-center min-w-screen min-h-screen'>
      <Button
        onClick={logout}
        className='btn btn-primary absolute top-8 right-8'
      >
        Sair
        <BiLogOutCircle size={25} />
      </Button>
      <h1 className='text-3xl mb-12'>Bem-vindo ao Pandora!</h1>

      <p className='text-lg mb-8'>Obrigado por se cadastrar !</p>
      <p className='text-md mb-12'>
        O aplicativo encontra-se em desenvolvimento e em breve estará disponível
        para uso !
      </p>
      <p className='text-md'>
        Enquanto isso você pode acompanhar esse projeto e outros no meu{' '}
        <a
          className='underline'
          target='_blank'
          href='https://github.com/igorfloresdev'
        >
          GitHub
        </a>{' '}
        ou{' '}
        <a
          className='underline'
          target='_blank'
          href='https://igorfloresdev.vercel.app'
        >
          Site
        </a>
        {''} .
      </p>
    </div>
  )
}
