import { React } from "react"
import { useForm } from "react-hook-form"

const SignInForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({mode: "all"})


  


  return (
    <form onSubmit={handleSubmit()}>
      <h2>Sign in</h2>
      <h3>Title for description</h3>
      <p>Логин:</p>
      <input
        type='text'
        placeholder='Email'
        {...register("email", { required: true })}
      />
      <error>{errors.email && "Поле email обязательно к заполнению"}</error>
      <p>Пароль:</p>
      <input
        type='text'
        placeholder='Password'
        {...register("password", { required: true, min: 6, max: 24 })}
      />
      <error>{errors.password && "Поле пароля обязательно к заполнению"}</error>
      <button type='submit'  disabled={!isValid}>Sign In</button>
    </form>
  )
}

export default SignInForm
