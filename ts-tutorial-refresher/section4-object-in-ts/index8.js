"use strict";
// Section 4, Discriminating Unions
/**
 * A function that logs a message based on the network state.
 * TypeScript uses the `state` discriminant to safely narrow each case.
 */
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading ..";
        case "failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response.title}`;
    }
}
console.log(logger({ state: "loading" }));
console.log(logger({ state: "failed", code: 500 }));
console.log(logger({
    state: "success",
    response: {
        title: "Connect OK!",
        duration: 200,
        summary: "Successfully connected!",
    },
}));
