import { createAction } from 'redux-actions'
import Notifications from 'react-notification-system-redux'

export const increment = createAction('INCREMENT_COUNTER')
export const decrement = createAction('DECREMENT_COUNTER')

export const setNotifications = (customOptions) => (dispatch) => {
  const defaultOptions = {
    level: 'info',
    position: 'br',
    autoDismiss: 500
  }
  const options = Object.assign(defaultOptions, customOptions)
  const notificationsAsType = {
    info: Notifications.info(options),
    warning: Notifications.warning(options),
    error: Notifications.error(options)
  }
  dispatch(notificationsAsType[options.level])
}
