import { HttpErrorResponse } from '@angular/common/http';

export interface ErrorHandlerResponse {
  title: string;
  body: string;
}

export function getDateISOStringWithoutTimezone(date: Date): string {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const tzOffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
  return (new Date(+date - tzOffset)).toISOString().slice(0, -5);
}

export function errorHandler(err: HttpErrorResponse): ErrorHandlerResponse {
  const { error, status, message } = err;
  const errorStatus = status || error?.status;
  const errorMessage = error?.message || message;

  const response: ErrorHandlerResponse = {
    title: `Код ошибки: ${errorStatus}`,
    body: '',
  };

  switch (errorStatus) {
    case 0:
      response.body = 'CORS ошибка, обратитесь к Администратору';
      break;
    case 401:
      response.body = 'Ошибка автоизации';
      break;
    case 429:
      response.body = 'Лимит запросов на сервер превышен';
      break;
    default:
      response.body = errorMessage;
      break;
  }

  return response;
}

export function calculateSumByField(array: any[], field: string): number {
  if (!array || !field) {
    return 0;
  }
  return array.reduce((sum, value) => sum + parseFloat(value[field]), 0);
}
