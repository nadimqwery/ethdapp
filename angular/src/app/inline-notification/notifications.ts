export class InlineNotification {
  constructor(
    private header: string,
    private detail: string,
    private type: InlineNotificationType
  ) {}
}

export enum InlineNotificationType {
  ERROR = 'danger',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

