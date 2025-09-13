import { type ComponentPropsWithoutRef } from "react";

export function Footer({ className }: ComponentPropsWithoutRef<"header">) {
    return (
        <footer className="p-2 text-xs text-center">
            <a href="https://theoldnet.com/get?decode=false&scripts=false&year=1997&url=http://xirlink.com/vp.htm" target="_blank">
                The 90's website
            </a>
        </footer>
    );
}
