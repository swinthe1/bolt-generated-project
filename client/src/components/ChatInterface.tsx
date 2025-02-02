import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Settings } from "lucide-react";

export default function ChatInterface() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-background/80 backdrop-blur-md border-t border-[#00FF9D]/20 p-4">
      <div className="max-w-3xl mx-auto flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-[#00FF9D] hover:text-[#00FF9D] hover:bg-[#00FF9D]/20"
        >
          <Mic className="h-5 w-5" />
        </Button>
        
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-background/50 border-[#00FF9D]/30 focus:border-[#00FF9D] text-foreground"
        />
        
        <Button
          variant="ghost"
          size="icon"
          className="text-[#00FF9D] hover:text-[#00FF9D] hover:bg-[#00FF9D]/20"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
