import { classNames } from "@/utils";
import { useSnapshot } from "valtio";
import { appSettings } from "../store/app-settings";
import { imagesApp } from "../store/images";

export function NavAppImages() {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <div className="flex flex-col gap-2 items-center w-20 shrink-0" aria-label="App images vertical bar">
            {imagesApp.map(
                (src, idx) => (
                    <img
                        className={classNames("w-16 cursor-pointer", idx === selectedImage && "scale-110 outline outline-sky-500/50 rounded transition-transform duration-300")}
                        src={src}
                        onClick={() => appSettings.selectedImage = idx}
                        style={{
                            filter: idx === selectedImage ? "grayscale(0)" : "grayscale(1)",
                        }}
                        alt={`App screenshot ${idx + 1}`}
                        key={idx} />
                )
            )}
        </div>
    );
}
