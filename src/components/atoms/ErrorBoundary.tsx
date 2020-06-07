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
    switch (error.response!.status) {
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
