export function getParams(params) {
  const id = params.id
  const { name, email, password, password_confirmation, current_password } = params.data
  return {
    admin: {
      id: id || '',
      name: name || '',
      email: email || '',
      password: password || '',
      password_confirmation: password_confirmation || '',
      current_password: current_password || ''
    }
  }
}
