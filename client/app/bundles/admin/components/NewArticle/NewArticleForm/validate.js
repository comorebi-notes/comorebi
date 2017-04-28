import {
  createValidator,
  required,
  maxLength,
  date,
  time
} from '../../../utils/validation'

const validate = createValidator({
  title:          [required, maxLength(255)],
  description:    [required],
  published_date: [required, date],
  published_time: [required, time]
})

export default validate
