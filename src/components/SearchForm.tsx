import React, { useState } from "react";
import { Button, Card, Container, Typography } from "@mui/material";
import { Form } from "./Form.tsx";
import { ResultsTable } from "./ResultsTable.tsx";
import { Video } from "../types/types.tsx";

export const SearchForm = ({ videos, setVideos }: Props) => {
    const [results, setResults] = useState("");

    return (
        <div>
            {videos.length === 0 ? (
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Card className="preferences-form">
                        <Form setVideos={setVideos} setResults={setResults} />
                    </Card>
                    <br />
                    {results && <Typography variant="h4">{results}</Typography>}
                </Container>
            ) : (
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ResultsTable videos={videos} pageRank={false} />
                    <Button
                        onClick={() => {
                            setVideos([]);
                        }}
                    >
                        New Search
                    </Button>
                </Container>
            )}
            <br />
            <br />
        </div>
    );
};

type Props = {
    videos: Video[];
    setVideos: Function;
};

export default SearchForm;
