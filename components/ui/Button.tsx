type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger' | 'ghost'
  isLoading?: boolean
}

export function Button({variant = 'primary', isLoading = false, children, disabled, ...rest}: ButtonProps) {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent border hover:bg-slate-50'
  }

  return (
    <button disabled={disabled || isLoading} className={` px-3 py-1 text-sm rounded transition-colors ${variants[variant]}`} {...rest} >
      {isLoading ? "Cargando" : children}
    </button>
  )
}