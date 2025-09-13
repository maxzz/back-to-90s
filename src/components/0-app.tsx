export function App() {
    return (
        <div className="App">
            <h1>Hello Vite + React!</h1>
            <div className="card">
                <button onClick={() => alert('Hello')}>Click me</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p>
                <a
                    className="link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
                {' | '}
                <a
                    className="link"
                    href="https://vitejs.dev/guide/api.html#cli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite CLI
                </a>
            </p>
            <p>
                <a
                    className="link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
            </p>
        </div>
    );
}