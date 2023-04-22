import { React } from "react"
import { useForm } from "react-hook-form"

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all" })

  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  return (
    <form onSubmit={handleSubmit()}>
      <h2>Регистрация</h2>
      <h3>Присоединяйтесь к нашей команде!</h3>
      <p>E-mail:</p>
      <input
        type='text'
        placeholder='Эл-почта'
        {...register("email", {
          required: "Поле обязательно к заполнению",
          pattern: { value: regexEmail, message: "Некорректный адрес Эл-почты" },
        })}
      />
      <error>{errors.email && errors.email.message}</error>
      <p>Пароль:</p>
      <input
        type='text'
        placeholder='Password'
        {...register("password", {
          required: "Поле обязательно к заполнению",
          minLength: { value: 6, message: "Минимум 6 символов" },
          maxLength: { value: 24, message: "Максимум 24 символа" },
        })}
      />
      {<error>{errors.password && errors.password.message}</error>}
      <button type='submit' disabled={!isValid}>
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
