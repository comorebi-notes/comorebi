export function getParams(params) {
  const id = params.id
  const { name, email, password, password_confirmation, current_password } = params.data
  return {
    id,
    name,
    email,
    password,
    password_confirmation,
    current_password
  }
}
