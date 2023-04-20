import { React } from "react"
import { useForm } from "react-hook-form"

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid},
    handleSubmit,
  } = useForm({ mode: "all" })

  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  return (
    <form onSubmit={handleSubmit()}>
      <h2>Sign Up</h2>
      <h3>Title for description</h3>
      <p>E-mail:</p>
      <input
        type='text'
        placeholder='Email'
        {...register("email", {
          required: "Поле обязательно для заполнения",
          pattern: { value: regexEmail, message: "Некорректный e-mail адрес" },
        })}
      />
      <error>{errors.email && errors.email.message}</error>
      <p>Пароль:</p>
      <input
        type='text'
        placeholder='Password'
        {...register("password", {
          required: "Поле обязательно для заполнения",
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
