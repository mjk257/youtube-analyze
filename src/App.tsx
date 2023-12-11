import React, { useState } from "react";
import Header from "./components/Header.tsx";
import SearchForm from "./components/SearchForm.tsx";
import { PageRankForm } from "./components/PageRankForm.tsx";

function App() {
    const [videos, setVideos] = useState([]);

    const [search, setSearch] = useState(true);
    return (
        <React.StrictMode>
            <Header setSearch={setSearch} setVideos={setVideos} />
            {search ? (
                <SearchForm videos={videos} setVideos={setVideos} />
            ) : (
                <PageRankForm videos={videos} setVideos={setVideos} />
            )}
        </React.StrictMode>
    );
}

export default App;
