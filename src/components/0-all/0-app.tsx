import { Header } from "../1-header";
import { SectionMain } from "../2-main";
import { Footer } from "../3-footer";

export function App() {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr_auto] gap-2">
            <Header />
            <SectionMain />
            <Footer />
        </div>
    );
}