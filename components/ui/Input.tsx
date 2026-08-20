import { forwardRef } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, ...rest}, ref) => {
  return (
    <div className=" flex flex-col gap-2">
      {label && 
      <label className=" text-sm text-shadow-gray-300 font-medium">{label}</label>
      }
      <input ref={ref} type="text" className={`border outline-none ring-gray-400 py-2 px-3 focus:border-violet-600 focus:border-2 ${error && " border-red-500"} ${className ? className : ""}`} {...rest} />
      { error && <span className=" text-lg font-semibold">{error}</span>}
    </div>
  )
})

Input.displayName = "Input"