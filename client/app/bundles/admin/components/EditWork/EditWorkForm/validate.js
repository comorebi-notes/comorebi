import { createValidator, required, email } from '../../../utils/validation'

const validate = createValidator({
  name: [required],
  email: [required, email]
})

export default validate
