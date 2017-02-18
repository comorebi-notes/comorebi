const isEmpty = value => value === undefined || value === null || value === ''

export function required(value) {
  if (isEmpty(value)) {
    return '必須項目です。'
  }
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return '文字数が多すぎます。'
    }
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return '文字数が少なすぎます。'
    }
  }
}

export function rangeOfNumbers(min, max) {
  return value => {
    if (value < min || value > max) {
      return `${min}〜${max} の範囲で入力してください。`
    }
  }
}

export function integer(value) {
  if (!isEmpty(value) && String(parseInt(value, 10)) !== String(value)) {
    return '整数を入力してください。'
  }
}

export function phone(value) {
  if (!isEmpty(value) && !/^0\d{1,4}-\d{1,4}-\d{4}$/i.test(value)) {
    return '電話番号のフォーマットが正しくありません。'
  }
}

export function email(value) {
  if (!isEmpty(value) && !/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/.test(value)) {
    return 'メールアドレスのフォーマットが正しくありません。'
  }
}

const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {}
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key]))
      const error = rule(data[key], data)
      if (error) errors[key] = error
    })
    return errors
  }
}
