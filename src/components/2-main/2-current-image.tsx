import { type ComponentPropsWithoutRef } from "react";
import { useSnapshot } from "valtio";
import { appSettings } from "../store/app-settings";
import { imagesApp } from "../store/images";

export function CurrentImage({ className, ...rest }: ComponentPropsWithoutRef<"img">) {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <img className={className} src={imagesApp[selectedImage]} alt="UI picture" {...rest} />
    );
}
