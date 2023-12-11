import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    Container,
    FormControl,
    TextField,
    Typography,
} from "@mui/material";
import ResultsTable from "./ResultsTable.tsx";
import { Video } from "../types/types.tsx";
import { getPageRank } from "../utils/api-calls.tsx";

export const PageRankForm = ({ videos, setVideos }: Props) => {
    const [results, setResults] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageRank, setPageRank] = useState("");

    const submitForm = () => {
        setLoading(true);
        const body = {
            pageRank: pageRank,
        };
        getPageRank(body).then((resp) => {
            if (resp.records.length > 0) {
                setVideos(resp.records);
                setResults("");
                setLoading(false);
            } else {
                setResults("No Results");
                setLoading(false);
            }
        });
    };

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
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": { m: 1, width: "25ch" },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <FormControl>
                                <TextField
                                    id="k"
                                    label="# of Results"
                                    variant="standard"
                                    type="number"
                                    onChange={(e) =>
                                        setPageRank(e.target.value)
                                    }
                                    disabled={loading}
                                />
                            </FormControl>
                        </Box>
                        <Button
                            onClick={() => {
                                submitForm();
                            }}
                            disabled={loading}
                        >
                            Submit
                        </Button>
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
                    <ResultsTable videos={videos} pageRank={true} />
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

export default PageRankForm;
