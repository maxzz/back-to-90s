import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { useSnapshot } from "valtio";
import { appSettings } from "../store/app-settings";
import { imagesApp } from "../store/images";

export function CurrentImage({ className, ...rest }: HTMLMotionProps<"img">) {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <AnimatePresence mode="wait">
            <motion.img
                key={selectedImage}
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.7 } }}
                exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.3, ease: "backIn" } }}
                className={className}
                src={imagesApp[selectedImage]}
                alt="UI picture"
                {...rest}
            />
        </AnimatePresence>
    );
}
