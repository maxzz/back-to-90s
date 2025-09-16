import { type ComponentPropsWithoutRef } from "react";
import { SvgForward } from "../ui/images";

export function Header({ className }: ComponentPropsWithoutRef<"header">) {
    return (
        <header className="p-2 flex items-center justify-center bg-slate-400">
            {/* <img className="pt-2 h-16" src="assets/images/title.svg" alt="title image of the 90's website" /> */}
            <SvgForward className="pt-2 h-16" title="forward" titleId="forward" />
        </header>
    );
}
