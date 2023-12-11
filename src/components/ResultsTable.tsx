import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Video } from "../types/types.tsx";

export const ResultsTable = ({ videos, pageRank }: Props) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Uploader</TableCell>
                            <TableCell align="right">Age (days)</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Length (sec)</TableCell>
                            <TableCell align="right">Views</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Ratings</TableCell>
                            <TableCell align="right">Comments</TableCell>
                            {pageRank && (
                                <TableCell align="right">PageRank</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videos?.map((video) => (
                            <TableRow
                                key={video?._fields[0].properties?.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {video?._fields[0].properties?.id}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.uploader}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.age}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.category}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.length}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.views}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.rate}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.ratings}
                                </TableCell>
                                <TableCell align="right">
                                    {video?._fields[0].properties?.comments}
                                </TableCell>
                                {pageRank && (
                                    <TableCell align="right">
                                        {video?._fields[1]}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

type Props = {
    videos: Video[];
    pageRank: boolean;
};

export default ResultsTable;
