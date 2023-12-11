export const getVideos = async (body: any) => {
    const response = await fetch("http://localhost:5000/api/db", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};

export const getPageRank = async (body: any) => {
    const response = await fetch("http://localhost:5000/api/db/pagerank", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};
