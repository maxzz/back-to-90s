import { Header } from "./1-header";
import { SectionMain } from "./2-main";
import { Footer } from "./3-footer";

export function App() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Header />
            <SectionMain />
            <Footer />
        </div>
    );
}