import React from 'react';
import { AxiosError } from 'axios';

export default class ErrorBoundary extends React.Component<
  any,
  { message: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { message: '' };
  }

  static getDerivedStateFromError(error: AxiosError) {
    // Update state so the next render will show the fallback UI.
    if (!error.response) return { message: 'Something is wrong...' };
    switch (error.response.status) {
      case 302:
        return { message: 'Your session is expired. Please login again.' };
      case 404:
        return { message: '404 Not Found.' };
      default:
        return { message: 'Something is wrong...' };
    }
  }

  // componentDidCatch(error: any, errorInfo: any) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.message) {
      // You can render any custom fallback UI
      return <h1>{this.state.message}</h1>;
    }

    return this.props.children;
  }
}
