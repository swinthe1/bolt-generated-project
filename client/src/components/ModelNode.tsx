import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ModelNodeProps {
  name: string;
  icon: string;
  style: React.CSSProperties;
}

export default function ModelNode({ name, icon, style }: ModelNodeProps) {
  return (
    <motion.div
      style={style}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        className="w-16 h-16 rounded-full bg-background/10 border-2 border-[#00FF9D] hover:bg-[#00FF9D]/20 hover:border-[#00FF9D] transition-all duration-300"
        style={{
          boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)",
        }}
      >
        <span className="text-2xl">{icon}</span>
      </Button>
      <div className="text-center mt-2 text-sm font-medium text-[#00FF9D]">
        {name}
      </div>
    </motion.div>
  );
}
