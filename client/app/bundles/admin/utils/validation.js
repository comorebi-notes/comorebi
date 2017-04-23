const isEmpty = (value) => (value === undefined || value === null || value === '')

export const required = (value) => (
  isEmpty(value) && (
    '必須項目です。'
  )
)

export const maxLength = (max) => (
  (value) => (!isEmpty(value) && value.length > max) && (
    '文字数が多すぎます。'
  )
)

export const minLength = (min) => (
  (value) => (!isEmpty(value) && value.length < min) && (
    '文字数が少なすぎます。'
  )
)

export const rangeOfNumbers = (min, max) => (
  (value) => (value < min || value > max) && (
    `${min}〜${max} の範囲で入力してください。`
  )
)

export const integer = (value) => (
  (!isEmpty(value) && String(parseInt(value, 10)) !== String(value)) && (
    '整数を入力してください。'
  )
)

export const date = (value) => (
  (!isEmpty(value) && !/^\d{4}-\d{1,2}-\d{1,2}$/.test(value)) && (
    '日付の形式が正しくありません。(yyyy-mm-dd)'
  )
)

export const time = (value) => (
  (!isEmpty(value) && !/^\d{2}:\d{2}.*/.test(value)) && (
    '時間のフォーマットが正しくありません。(00:00)'
  )
)

export const phone = (value) => (
  (!isEmpty(value) && !/^0\d{1,4}-\d{1,4}-\d{4}$/i.test(value)) && (
    '電話番号のフォーマットが正しくありません。'
  )
)

export const requiredObject = (value) => (
  (!Object.keys(value).length || !Object.keys(value).filter((key) => value[key].length).length) && (
    '必須項目です。'
  )
)

export const email = (value) => (
  (!isEmpty(value) && !/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/.test(value)) && (
    'メールアドレスのフォーマットが正しくありません。'
  )
)

const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]

export const createValidator = (rules) => (
  (data = {}) => {
    const errors = {}
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key]))
      const error = rule(data[key], data)
      if (error) errors[key] = error
    })
    return errors
  }
)
