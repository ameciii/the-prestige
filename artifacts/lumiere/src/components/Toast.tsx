import { useEffect } from 'react';

export type ToastVariant = 'success' | 'error';

export type ToastData = {
  variant: ToastVariant;
  title: string;
  message: string;
};

type ToastProps = {
  toast: ToastData | null;
  onDismiss: () => void;
  /** Auto-dismiss after this many ms. 0 = no auto-dismiss. Default: 5000. */
  duration?: number;
};

/**
 * Fixed-position toast that slides up from the bottom-center.
 * Shown when `toast` is non-null; auto-dismisses after `duration` ms.
 */
export function Toast({ toast, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!toast || duration === 0) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [toast, duration, onDismiss]);

  if (!toast) return null;

  const icon = toast.variant === 'success' ? '✦' : '!';

  return (
    <div className={`hp-toast hp-toast--${toast.variant}`} role="alert">
      <div className="hp-toast__icon" aria-hidden="true">{icon}</div>
      <div className="hp-toast__body">
        <div className="hp-toast__title">{toast.title}</div>
        <div className="hp-toast__message">{toast.message}</div>
      </div>
      <button
        type="button"
        className="hp-toast__close"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}
