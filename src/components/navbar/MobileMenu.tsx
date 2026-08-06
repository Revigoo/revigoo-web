import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Props {
  open: boolean;
  onClose: () => void;
}

const items = [
  "Home",
  "About",
  "Features",
  "Workflow",
  "Contact",
];

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring" }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-[#071A2F] p-8"
          >
            <button
              className="self-end text-white"
              onClick={onClose}
            >
             <FaTimes size={28} />
            </button>

            <div className="mt-16 flex flex-col gap-8">

              {items.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-white"
                  onClick={onClose}
                >
                  {item}
                </a>
              ))}

              <button className="mt-8 rounded-full bg-orange-500 py-4 font-semibold text-white">
                Launch App
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}