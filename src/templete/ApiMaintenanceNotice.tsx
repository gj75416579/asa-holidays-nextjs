type ApiMaintenanceNoticeProps = {
  visible?: boolean
  message?: string
  className?: string
}

export default function ApiMaintenanceNotice({
  visible = false,
  message = 'We are currently performing maintenance. Please try again later.',
  className = '',
}: ApiMaintenanceNoticeProps) {
  if (!visible) {
    return null
  }

  return (
    <div className={`api-maintenance-notice${className ? ` ${className}` : ''}`} role="status" aria-live="polite">
      <div className="container">
        <p>{message}</p>
      </div>
    </div>
  )
}
