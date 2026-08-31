"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChatInterface } from "@/components/chat/chat-interface";

function ChatContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return <ChatInterface initialQuery={query} />;
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="flex h-[calc(100vh-4rem)] items-center justify-center text-text-muted">Loading...</div>}>
      <ChatContent />
    </Suspense>
  );
}
