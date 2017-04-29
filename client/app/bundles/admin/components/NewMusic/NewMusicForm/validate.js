import {
  createValidator,
  required,
  maxLength
} from '../../../utils/validation'

const validate = createValidator({
  title:      [required, maxLength(255)],
  sound_file: [required]
})

export default validate
