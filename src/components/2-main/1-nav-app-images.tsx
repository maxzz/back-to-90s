import { type ComponentPropsWithoutRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { appSettings } from "../store/app-settings";
import { imagesApp } from "../store/images";

export function NavAppImages({className, ...rest}: ComponentPropsWithoutRef<"div">) {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <div className={classNames("flex flex-col gap-2 items-center w-20 shrink-0", className)} aria-label="App images vertical bar" {...rest}>
            {imagesApp.map(
                (src, idx) => (
                    <img
                        className={classNames("w-16 cursor-pointer", idx === selectedImage && "scale-110 outline-solid outline-sky-500/50 rounded-sm transition-transform duration-300")}
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
