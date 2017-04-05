const notificationOptions = (customOptions) => {
  const defaultOptions = {
    level: 'info',
    position: 'br',
    autoDismiss: 5
  }
  const iconClasses = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-circle',
    error: 'exclamation-triangle'
  }
  const options = Object.assign(defaultOptions, customOptions)

  const iconElement = `<span class="icon"><i class="fa fa-${iconClasses[options.level]}"></i></span>`
  if (options.noTitle) {
    options.message = iconElement + options.message
  } else {
    options.title = options.title || `${options.level.toUpperCase()}!`
    options.title = iconElement + options.title
  }
  return options
}

export default notificationOptions
