// all the backend endpoints are stored here
// if more than one backend is used, they can be added here
// however must be split into multiple objects for each server used 
export const endpoints = {
    main: process.env.NODE_ENV === "development" ? "http://localhost:8000/api" : "https://api.davidk.tech/api",
    nations: "/nations",
    continents: "/continents",
};
