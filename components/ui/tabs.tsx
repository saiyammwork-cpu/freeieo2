"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue>({
  activeTab: "",
  setActiveTab: () => {},
});

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-xl bg-background p-1 border border-surface-border",
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const { activeTab, setActiveTab } = React.useContext(TabsContext);
    const isActive = activeTab === value;
    return (
      <button
        ref={ref}
        onClick={() => setActiveTab(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all relative",
          isActive
            ? "text-text-primary"
            : "text-text-muted hover:text-text-primary",
          className
        )}
        {...props}
      >
        {isActive && (
          <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-pink" />
        )}
        {props.children}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const { activeTab } = React.useContext(TabsContext);
    if (activeTab !== value) return null;
    return (
      <div
        ref={ref}
        className={cn("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40 rounded-xl", className)}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
