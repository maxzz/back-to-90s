import { type ComponentPropsWithoutRef } from "react";

export function Header({ className }: ComponentPropsWithoutRef<"header">) {
    return (
        <header className="p-2 flex items-center justify-center">
            <img className="pt-2 h-16" src="assets/images/title.svg" alt="title image of the 90's website" />
        </header>
    );
}
