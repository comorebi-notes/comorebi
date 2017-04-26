import Notifications from 'react-notification-system-redux'

const defaultOptions = {
  level: 'info',
  position: 'br',
  autoDismiss: 5
}
const iconClasses = {
  success: 'check-circle',
  info:    'info-circle',
  warning: 'exclamation-circle',
  error:   'exclamation-triangle'
}
const iconDom = (icon) => `<span class="icon"><i class="fa fa-${icon}"></i></span>`

const notificationOptions = (customOptions) => {
  const options = Object.assign({}, defaultOptions, customOptions)
  const iconElement = iconDom(iconClasses[options.level])
  if (options.noTitle) {
    options.message = iconElement + options.message
  } else {
    options.title = options.title || `${options.level.toUpperCase()}!`
    options.title = iconElement + options.title
  }
  return options
}

const setNotifications = (customOptions) => (dispatch) => {
  const options = notificationOptions(customOptions)
  const notificationsByLevel = {
    success: Notifications.success(options),
    info:    Notifications.info(options),
    warning: Notifications.warning(options),
    error:   Notifications.error(options)
  }
  dispatch(notificationsByLevel[options.level])
}

export default setNotifications
