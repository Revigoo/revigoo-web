import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071A2F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black tracking-widest text-white"
          >
            REVI
            <span className="text-orange-500">G</span>
            OO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg text-slate-300"
          >
            Ride Easy. We Care.
          </motion.p>

          {/* Loading Bar */}

          <div className="mt-10 h-1 w-60 overflow-hidden rounded-full bg-slate-700">
            <motion.div
              className="h-full bg-orange-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}