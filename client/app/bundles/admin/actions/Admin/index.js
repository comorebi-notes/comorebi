import { createAction } from 'redux-actions'
import Notifications from 'react-notification-system-redux'

export const increment = createAction('INCREMENT_COUNTER')
export const decrement = createAction('DECREMENT_COUNTER')

export const clearInitialNotification = createAction('CLEAR_INITIAL_NOTIFICATION')
export const setNotifications = (customOptions) => (dispatch) => {
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

  const iconTarget = options.title ? 'title' : 'message'
  const iconElement = `<span class="icon"><i class="fa fa-${iconClasses[options.level]}"></i></span>`
  options[iconTarget] = iconElement + options[iconTarget]

  const notificationsAsType = {
    success: Notifications.success(options),
    info: Notifications.info(options),
    warning: Notifications.warning(options),
    error: Notifications.error(options)
  }
  dispatch(notificationsAsType[options.level])
}
