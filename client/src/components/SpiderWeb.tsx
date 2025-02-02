import { motion } from "framer-motion";
    import ModelNode from "./ModelNode";

    const models = [
      { id: "deepseek", name: "DeepSeek", icon: "🧠", position: { left: "15%", top: "25%" } },
      { id: "chatgpt", name: "ChatGPT", icon: "🤖", position: { left: "25%", top: "15%" } },
      { id: "gemini", name: "Gemini", icon: "♊", position: { left: "20%", top: "40%" } },
      { id: "claude", name: "Claude", icon: "🎭", position: { right: "20%", top: "40%" } },
      { id: "qwen", name: "Qwen2.5", icon: "🔮", position: { right: "25%", top: "15%" } },
      { id: "llama", name: "Llama 3.1", icon: "🦙", position: { right: "15%", top: "25%" } },
    ];

    export default function SpiderWeb() {
      return (
        <div className="relative w-full h-[calc(100vh-120px)]">
          {/* Logo */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <motion.img
              src="/spider-ai-logo.svg"
              alt="SpiderAI"
              className="w-48 h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Spider Web SVG */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 2264.63 854.36"
              className="w-full h-full"
              style={{
                filter: "drop-shadow(0 0 10px rgba(0, 255, 157, 0.3))",
              }}
            >
              <defs>
                <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FF9D" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00FF9D" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Left Web Section */}
              <motion.path
                d="M116.57,142.72s324.63,501,1025.14,577"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.path
                d="M1141.71,719.72S753.48,979.67,171.12,770.36"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              />
              <motion.path
                d="M539.1,157.62s91.15,273.46,602.61,562.1"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.path
                d="M348,387.7s210.46,74.71,317.22-37.8"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.path
                d="M555,532.34s93.22,22.53,200-90"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <motion.path
                d="M714.93,608.33s84,0,132-86"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M604.94,852.3s104-74,110-244"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path
                d="M812.92,836.3s66-46,54-174"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.path
                d="M866.91,664.33s44-12,44-94"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path
                d="M960.9,690.32s30-6,38-58"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.path
                d="M956.9,800.31s20-42,4-110"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
              />
              <motion.path
                d="M415,834.3s152-120,146-300"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              />
              <motion.path
                d="M267,800.31s122-132,86-409.95"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />

              {/* Right Web Section - Mirrored paths */}
              <motion.path
                d="M2167.83,142.72s-324.63,501-1025.15,577"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.path
                d="M1142.68,719.72s388.24,259.95,970.6,50.64"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              />
              <motion.path
                d="M1745.29,157.62s-91.15,273.46-602.61,562.1"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.path
                d="M1936.45,387.7S1726,462.41,1619.23,349.9"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.path
                d="M1729.45,532.34s-93.22,22.53-200-90"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <motion.path
                d="M1569.47,608.33s-84,0-132-86"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M1679.45,852.3s-104-74-110-244"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path
                d="M1471.48,836.3s-66-46-54-174"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.path
                d="M1417.49,664.33s-44-12-44-94"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path
                d="M1323.5,690.32s-30-6-38-58"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.path
                d="M1327.5,800.31s-20-42-4-110"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
              />
              <motion.path
                d="M1869.43,834.3s-152-120-146-300"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              />
              <motion.path
                d="M2017.41,800.31s-122-132-86-409.95"
                className="cls-1"
                stroke="url(#webGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </svg>
          </div>

          {/* Model Nodes */}
          {models.map((model) => (
            <ModelNode
              key={model.id}
              name={model.name}
              icon={model.icon}
              style={{
                position: "absolute",
                ...model.position,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      );
    }
