import { type ComponentPropsWithoutRef } from "react";
import { classNames } from "@/utils";
import { SvgForward } from "../ui/images";

export function Header({ className, ...rest }: ComponentPropsWithoutRef<"header">) {
    return (
        <header className={classNames("p-2 flex items-center justify-center bg-canvas border-b border-slate-600", className)} {...rest}>
            {/* <img className="pt-2 h-16" src="assets/images/title.svg" alt="title image of the 90's website" /> */}
            <SvgForward className="pt-2 h-16" title="forward" titleId="forward" />
        </header>
    );
}
