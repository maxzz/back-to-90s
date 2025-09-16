import { type ComponentPropsWithoutRef } from "react";
import { classNames } from "@/utils";

export function Footer({ className, ...rest }: ComponentPropsWithoutRef<"header">) {
    return (
        <footer className={classNames("p-2 text-xs text-center bg-canvas text-slate-400 border-t border-slate-600", className)} {...rest}>
            <a href="https://theoldnet.com/get?decode=false&scripts=false&year=1997&url=http://xirlink.com/vp.htm" target="_blank">
                The 90's time machine website
            </a>
        </footer>
    );
}
