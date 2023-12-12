import React, { useState } from "react";
import { Box, Button, FormControl, IconButton, TextField } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import NumbersIcon from "@mui/icons-material/Numbers";
import { getVideos } from "../utils/api-calls.tsx";

export const Form = ({ setVideos, setResults }: Props) => {
    const [videoId, setVideoId] = useState("");
    const [uploader, setUploader] = useState("");
    const [age, setAge] = useState("");
    const [category, setCategory] = useState("");
    const [length, setLength] = useState("");
    const [views, setViews] = useState("");
    const [rate, setRate] = useState("");
    const [ratings, setRatings] = useState("");
    const [comments, setComments] = useState("");

    const [toggleAgeRange, setToggleAgeRange] = useState(false);
    const [toggleLengthRange, setToggleLengthRange] = useState(false);
    const [toggleViewsRange, setToggleViewsRange] = useState(false);
    const [toggleRateRange, setToggleRateRange] = useState(false);
    const [toggleRatingsRange, setToggleRatingsRange] = useState(false);
    const [toggleCommentsRange, setToggleCommentsRange] = useState(false);

    const [ageLower, setAgeLower] = useState("");
    const [ageUpper, setAgeUpper] = useState("");
    const [lengthLower, setLengthLower] = useState("");
    const [lengthUpper, setLengthUpper] = useState("");
    const [viewsLower, setViewsLower] = useState("");
    const [viewsUpper, setViewsUpper] = useState("");
    const [rateLower, setRateLower] = useState("");
    const [rateUpper, setRateUpper] = useState("");
    const [ratingsLower, setRatingsLower] = useState("");
    const [ratingsUpper, setRatingsUpper] = useState("");
    const [commentsLower, setCommentsLower] = useState("");
    const [commentsUpper, setCommentsUpper] = useState("");

    const [loading, setLoading] = useState(false);

    const submitForm = () => {
        setLoading(true);
        const video = {
            id: videoId,
            uploader: uploader,
            age: toggleAgeRange ? [ageLower, ageUpper] : age,
            category: category,
            length: toggleLengthRange ? [lengthLower, lengthUpper] : length,
            views: toggleViewsRange ? [viewsLower, viewsUpper] : views,
            rate: toggleRateRange ? [rateLower, rateUpper] : rate,
            ratings: toggleRatingsRange
                ? [ratingsLower, ratingsUpper]
                : ratings,
            comments: toggleCommentsRange
                ? [commentsLower, commentsUpper]
                : comments,
        };
        getVideos(video).then((resp) => {
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
    const textFields = [
        {
            id: "video_id",
            onChange: (e) => setVideoId(e.target.value),
            label: "ID",
            type: "text",
        },
        {
            id: "uploader",
            onChange: (e) => setUploader(e.target.value),
            label: "Uploader",
            type: "text",
        },
        {
            id: "category",
            onChange: (e) => setCategory(e.target.value),
            label: "Category",
            type: "text",
        },
    ];

    const rangeFields = [
        {
            id: "age",
            onChange: (e) => setAge(e.target.value),
            label: "Age",
            range: toggleAgeRange,
            rangeToggler: (e) => {
                setToggleAgeRange(e);
            },
            lower: (e) => {
                setAgeLower(e.target.value);
            },
            upper: (e) => {
                setAgeUpper(e.target.value);
            },
            type: "range",
        },
        {
            id: "length",
            onChange: (e) => setLength(e.target.value),
            label: "Length",
            range: toggleLengthRange,
            rangeToggler: (e) => {
                setToggleLengthRange(e);
            },
            lower: (e) => {
                setLengthLower(e.target.value);
            },
            upper: (e) => {
                setLengthUpper(e.target.value);
            },
            type: "range",
        },
        {
            id: "views",
            onChange: (e) => setViews(e.target.value),
            label: "Views",
            range: toggleViewsRange,
            rangeToggler: (e) => {
                setToggleViewsRange(e);
            },
            lower: (e) => {
                setViewsLower(e.target.value);
            },
            upper: (e) => {
                setViewsUpper(e.target.value);
            },
            type: "range",
        },
        {
            id: "rate",
            onChange: (e) => setRate(e.target.value),
            label: "Rate",
            range: toggleRateRange,
            rangeToggler: (e) => {
                setToggleRateRange(e);
            },
            lower: (e) => {
                setRateLower(e.target.value);
            },
            upper: (e) => {
                setRateUpper(e.target.value);
            },
            type: "range",
        },
        {
            id: "ratings",
            onChange: (e) => setRatings(e.target.value),
            label: "Ratings",
            range: toggleRatingsRange,
            rangeToggler: (e) => {
                setToggleRatingsRange(e);
            },
            lower: (e) => {
                setRatingsLower(e.target.value);
            },
            upper: (e) => {
                setRatingsUpper(e.target.value);
            },
            type: "range",
        },
        {
            id: "comments",
            onChange: (e) => setComments(e.target.value),
            label: "Comments",
            range: toggleCommentsRange,
            rangeToggler: (e) => {
                setToggleCommentsRange(e);
            },
            lower: (e) => {
                setCommentsLower(e.target.value);
            },
            upper: (e) => {
                setCommentsUpper(e.target.value);
            },
            type: "range",
        },
    ];

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                {textFields.map((field) => {
                    return (
                        <TextField
                            id={field?.id}
                            label={field?.label}
                            variant="outlined"
                            onChange={field?.onChange}
                            disabled={loading}
                        />
                    );
                })}
            </Box>
            <FormControl>
                {rangeFields.map((field) => {
                    return (
                        <FormControl>
                            {field.range === true ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IconButton
                                        onClick={() =>
                                            field?.rangeToggler(false)
                                        }
                                        disabled={loading}
                                    >
                                        <NumbersIcon />
                                    </IconButton>
                                    <TextField
                                        id={field?.id + "Lower"}
                                        label={field?.label + " Lower Bound"}
                                        variant="outlined"
                                        type="number"
                                        onChange={(e) => field?.lower(e)}
                                        disabled={loading}
                                    />
                                    <TextField
                                        id={field?.id + "Upper"}
                                        label={field?.label + " Upper Bound"}
                                        variant="outlined"
                                        type="number"
                                        onChange={(e) => {
                                            field?.upper(e);
                                        }}
                                        disabled={loading}
                                    />
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IconButton
                                        onClick={() =>
                                            field?.rangeToggler(true)
                                        }
                                        disabled={loading}
                                    >
                                        <LayersIcon />
                                    </IconButton>
                                    <TextField
                                        id={field?.id}
                                        label={field?.label}
                                        variant="outlined"
                                        type="number"
                                        onChange={(e) => field?.onChange(e)}
                                        disabled={loading}
                                    />
                                </Box>
                            )}
                        </FormControl>
                    );
                })}
            </FormControl>
            <br />
            <Button onClick={(e) => submitForm()} disabled={loading}>
                Search
            </Button>
        </>
    );
};

type Props = {
    setVideos: Function;
    setResults: Function;
};
export default Form;
