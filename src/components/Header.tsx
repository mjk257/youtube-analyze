import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Header = ({ setSearch, setVideos }: Props) => {
    return (
        <div>
            <AppBar position="static" className="header-bar">
                <Toolbar>
                    <Box
                        sx={{
                            float: "none",
                            width: "200px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "flex",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{ marginRight: "5" }}
                            onClick={() => {
                                setSearch(true);
                                setVideos([]);
                            }}
                        >
                            Query
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ marginLeft: "5px" }}
                            onClick={() => {
                                setSearch(false);
                                setVideos([]);
                            }}
                        >
                            PageRank
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

type Props = {
    setSearch: Function;
    setVideos: Function;
};

export default Header;
