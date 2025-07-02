export enum notifType {
  success,
  error,
  info,
}

export interface INotification {
  id: string
  message: string
  type: notifType
}
