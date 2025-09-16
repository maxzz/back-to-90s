import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export function Explanation({ showOrHide = true }: { showOrHide?: boolean }) {
    return (
        <AnimatePresence>
            {showOrHide && (
                <motion.section
                    className="grid gap-2"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <p>
                        A long time ago I developed interfaces for a company that no longer exists, but the memories remain.
                    </p>

                    <p>
                        It was the dark age of square windows in Windows 95.
                        Everything about the user interface was flat, square, and boring.

                        I was lucky enough to convince the company's management to add some fun in the form of
                        {/* {' '}<a href="https://en.wikipedia.org/wiki/Skeuomorphism" target="_blank" rel="noreferrer"> */}
                        {' '}
                        <a href="https://www.google.com/search?q=skeuomorphism&sourceid=chrome&ie=UTF-8" target="_blank" rel="noreferrer">
                            skeuomorphism.
                        </a>
                        {' '}
                    </p>

                    <p>
                        Compared to flat design, skeuomorphic design seems to facilitate a fast navigation through graphic user interfaces, because icons are more easily recognized and less abstract than their minimalistic counterparts found in flat design.
                        {/* Compared to flat design, skeuomorphic design appears to facilitate quick navigation through graphical user interfaces, as the icons are easier to recognize and less abstract than their minimalist counterparts found in flat design. */}
                        {/* org: Compared to flat design, skeuomorphic design seems to facilitate a fast navigation through graphic user interfaces, because icons are more easily recognized and less abstract than their minimalistic counterparts found in flat design. */}

                        And it was the right decision at the time.

                        {/* Skeuomorphism is a design approach where digital interfaces mimic real-world objects by replicating their textures, dimensions, and even their use, with the goal of making new technology more familiar and intuitive for users. */}
                    </p>

                    <p>
                        I still love this design.
                    </p>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
