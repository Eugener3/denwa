import { React } from "react"
import { useForm } from "react-hook-form"

const SignInForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all" })

  return (
    <form onSubmit={handleSubmit()}>
      <h2>Авторизация</h2>
      <h3>Получите доступ к своему профилю</h3>
      <p>Эл-почта:</p>
      <input
        type='text'
        placeholder='Эл-почта'
        {...register("email", { required: true })}
      />
      <error>{errors.email && "Поле обязательно к заполнению"}</error>
      <p>Пароль:</p>
      <input
        type='text'
        placeholder='Пароль'
        {...register("password", { required: true, min: 6, max: 24 })}
      />
      <error>{errors.password && "Поле обязательно к заполнению"}</error>
      <button type='submit' disabled={!isValid}>
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
