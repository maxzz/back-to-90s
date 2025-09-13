import { imagesApp } from "../store/images";
import { ThatsAllFolks } from "./1-thats-all-folks";

export function SectionMain() {
    return (
        <div className="grid grid-cols-[1fr_minmax(100px,700px)_1fr] place-items-center gap-2 bg-slate-300">
            <div className="col-start-2 relative text-sm text-center text-balance bg-slate-300 grid grid-cols-[auto_1fr] items-start gap-4 p-4">
                {/* Left vertical bar with images */}
                <aside className="flex flex-col gap-2 items-center w-20 shrink-0" aria-label="App images vertical bar">
                    {imagesApp.map(
                        (src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`App screenshot ${idx + 1}`}
                                className="w-16 object-cover rounded-sm border border-red-600"
                            />
                        )
                    )}
                </aside>

                <div className="text-center text-balance grid grid-rows-[auto_1fr_auto] gap-2">
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
        </div>
    );
}
