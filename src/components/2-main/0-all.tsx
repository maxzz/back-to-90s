import { useSnapshot } from "valtio";
import { appSettings } from "../store/app-settings";
import { ThatsAllFolks } from "./1-thats-all-folks";
import { imagesApp } from "../store/images";
import { classNames } from "@/utils";

export function SectionMain() {
    return (
        <div className="grid grid-cols-[1fr_minmax(100px,700px)_1fr] place-items-center gap-2 bg-slate-300">
            <div className="col-start-2 relative text-sm text-center text-balance bg-slate-300 grid grid-cols-[auto_1fr] items-start gap-4 p-4">
                <AppImages />

                <div className="text-center text-balance grid grid-rows-[auto_1fr_auto] gap-2">
                    <p>
                        A long time ago I developed interfaces for a company that no longer exists, but the memories remain.
                    </p>

                    <p>
                        It was the dark age of square windows in Windows 95.
                        Everything about the user interface was flat, square, and boring.
                        I was lucky enough to convince the management to add a little fun, and it was the right decision at the time.
                        I still love this design.
                    </p>

                    <img src={imagesApp[0]} alt="UI picture" />

                    <ThatsAllFolks className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-500" />
                </div>
            </div>
        </div>
    );
}

function AppImages() {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <div className="flex flex-col gap-2 items-center w-20 shrink-0" aria-label="App images vertical bar">
            {imagesApp.map(
                (src, idx) => (
                    <img
                        className={classNames("w-16 cursor-pointer transition-all duration-300", idx === selectedImage && "scale-110 border-2 border-red-500 rounded")}
                        src={src}
                        onClick={() => appSettings.selectedImage = idx}
                        style={{
                            filter: idx === selectedImage ? "grayscale(0)" : "grayscale(1)",
                        }}
                        alt={`App screenshot ${idx + 1}`}
                        key={idx}
                    />
                )
            )}
        </div>
    );
}
