import { useEffect } from "react";
import SpiderWeb from "@/components/SpiderWeb";
import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#1a1e23";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <SpiderWeb />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <ChatInterface />
      </div>
    </div>
  );
}
