import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className='card flex-shrink-0 w-full shadow-2xl bg-base-100'>
      <div className='card-body'>{children}</div>
    </div>
  )
}
