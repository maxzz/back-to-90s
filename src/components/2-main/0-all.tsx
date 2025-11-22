import { type ComponentPropsWithoutRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { appSettings } from "../store/app-settings";
import { NavAppImages } from "./1-nav-app-images";
import { CurrentImage } from "./3-current-image";
import { ThatsAllFolks } from "../ui/icons";
import { Explanation } from "./2-explanation";

export function SectionMain({ className, ...rest }: ComponentPropsWithoutRef<"section">) {
    const { selectedImage } = useSnapshot(appSettings);
    return (
        <div className={classNames("grid grid-cols-[1fr_minmax(100px,700px)_1fr] blueprint text-slate-400", className)} {...rest}>
            <div className="col-start-2 text-xs grid grid-cols-[auto_1fr] gap-4 p-4">
                <NavAppImages className="self-center" />

                <div className="relative grid grid-rows-[auto_1fr] gap-2">
                    <Explanation showOrHide={selectedImage === 0} />

                    <div className="size-full grid place-items-center">
                        <CurrentImage className="fill-red-500" />
                    </div>

                    <ThatsAllFolks className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-500" />
                </div>
            </div>
        </div>
    );
}


