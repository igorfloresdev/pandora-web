type InputProps = {
  type?: string
  label?: string
  placeholder?: string
  required?: boolean
  getValue?: (value: string) => void
}

export default function Input({
  type = 'text',
  label,
  placeholder,
  getValue,
  required = false,
}: InputProps) {
  return (
    <>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => getValue && getValue(e.target.value)}
        className={`input input-bordered`}
      />
    </>
  )
}
