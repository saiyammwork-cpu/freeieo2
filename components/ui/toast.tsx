"use client";

import * as React from "react";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

const TOAST_LIMIT = 1;
let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Action = {
  label: string;
  onClick: () => void;
};

type ToastItem = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: Action;
};

type ToastState = {
  toasts: ToastItem[];
};

const ToastContext = React.createContext<{
  toasts: ToastItem[];
  toast: (props: ToastProps & { action?: Action }) => void;
}>({
  toasts: [],
  toast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ToastState>({ toasts: [] });

  const addToast = React.useCallback(
    (props: ToastProps & { action?: Action }) => {
      const id = genId();
      const toast: ToastItem = { ...props, id };
      setState((prev) => {
        const newToasts = [toast, ...prev.toasts].slice(0, TOAST_LIMIT);
        return { toasts: newToasts };
      });
      setTimeout(() => {
        setState((prev) => ({
          toasts: prev.toasts.filter((t) => t.id !== id),
        }));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toasts: state.toasts, toast: addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {state.toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-surface border border-surface-border rounded-xl p-4 shadow-lg max-w-sm animate-in slide-in-from-bottom-2"
          >
            {toast.title && (
              <p className="font-medium text-text-primary text-sm">{toast.title}</p>
            )}
            {toast.description && (
              <p className="text-text-muted text-sm mt-1">{toast.description}</p>
            )}
            {toast.action && (
              <button
                onClick={toast.action.onClick}
                className="text-accent-violet text-sm font-medium mt-2 hover:underline"
              >
                {toast.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
