export enum notifType {
  success,
  error,
  info,
}

export interface Notification {
  id: string
  message: string
  type: notifType
}
