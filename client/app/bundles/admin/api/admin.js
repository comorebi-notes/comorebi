export function getParams(params) {
  const { name, email, password, password_confirmation, current_password } = params.data
  return {
    admin: {
      name: name || '',
      email: email || '',
      password: password || '',
      password_confirmation: password_confirmation || '',
      current_password: current_password || ''
    }
  }
}
