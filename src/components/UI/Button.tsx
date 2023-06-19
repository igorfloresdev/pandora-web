import { ReactNode } from 'react'

type ButtonProps = {
  className?: string
  children?: ReactNode
  onClick?: () => void
}

export default function Button({
  className = 'btn btn-primary',
  children,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
