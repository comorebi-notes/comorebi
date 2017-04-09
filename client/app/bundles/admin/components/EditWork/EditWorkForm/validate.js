import { createValidator, required } from '../../../utils/validation'

const validate = createValidator({
  title: [required],
  description: [required]
})

export default validate
