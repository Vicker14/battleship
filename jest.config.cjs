module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.m?js$": "babel-jest",
    },
    moduleFileExtensions: ["js", "json"],
    roots: ["<rootDir>/src"],
};
