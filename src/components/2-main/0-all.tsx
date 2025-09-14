import { NavAppImages } from "./1-nav-app-images";
import { CurrentImage } from "./2-current-image";
import { ThatsAllFolks } from "../ui/icons";

export function SectionMain() {
    return (
        <div className="grid grid-cols-[1fr_minmax(100px,700px)_1fr] bg-slate-300">
            <div className="col-start-2 text-xs grid grid-cols-[auto_1fr] gap-4 p-4">
                <NavAppImages />

                <div className="relative grid grid-rows-[auto_auto_1fr] gap-2">
                    <p>
                        A long time ago I developed interfaces for a company that no longer exists, but the memories remain.
                    </p>

                    <p>
                        It was the dark age of square windows in Windows 95.
                        Everything about the user interface was flat, square, and boring.
                        I was lucky enough to convince the management to add a little fun, and it was the right decision at the time.
                        I still love this design.
                    </p>

                    <CurrentImage className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-500" />

                    <ThatsAllFolks className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-500" />
                </div>
            </div>
        </div>
    );
}
