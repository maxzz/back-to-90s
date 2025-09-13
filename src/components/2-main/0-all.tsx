import { imagesApp } from "../store/images";
import { ThatsAllFolks } from "./1-thats-all-folks";

export function SectionMain() {
    return (
        <div className="grid grid-cols-[1fr_minmax(100px,700px)_1fr] 1place-items-center gap-2 1bg-slate-300">
            <div className="col-start-2 relative text-sm text-center text-balance bg-slate-300 grid justify-items-center grid-rows-[auto_1fr_auto] gap-2">
                <p>
                    A long time ago I developed interfaces for a company that no longer exists, but the memories remain.
                </p>

                <p>
                    It was the dark age of square windows in Windows 95.
                    Everything about the user interface was flat, square, and boring.
                    I was lucky enough to convince the management to add a little fun, and it was the right decision at the time.
                    I still love this design.
                </p>

                <img src={imagesApp[0]} alt="UI picture" />

                <ThatsAllFolks className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-500" />
            </div>
        </div>
    );
}
