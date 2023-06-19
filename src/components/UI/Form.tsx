import { FormEvent, ReactNode } from 'react'

type FormProps = {
  children: ReactNode
}
export default function Form({ children }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  return <form onSubmit={handleSubmit}>{children}</form>
}
