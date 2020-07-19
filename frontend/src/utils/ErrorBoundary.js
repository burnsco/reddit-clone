import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    }
  }

  render() {
    const { hasError } = this.state
    const { fallback, children } = this.props

    if (hasError) {
      return fallback
    }

    return children
  }
}
