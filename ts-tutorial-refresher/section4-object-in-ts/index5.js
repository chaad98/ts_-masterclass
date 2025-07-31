"use strict";
// Section4, Optional and Readonly Properties
/**
 * These are the properties of a Post5 object.
 */
let post5 = {
    title: "This is blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "Nested Author",
        age: 69,
        email: "nestedAuhor@gmail.com",
        type: "human",
    },
    awards: {
        web1: {
            name: "Web1 Awards",
            date: new Date(),
        },
        web2: {
            name: "Web2 Awards",
            date: new Date(),
        },
    },
    category: "typescript",
};
let post5Duplicate = {
    title: "This is blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "Nested Author",
        age: 69,
        email: "nestedAuhor@gmail.com",
        type: "ai",
    },
    awards: {
        web1: {
            name: "Web1 Awards",
            date: new Date(),
        },
        web2: {
            name: "Web2 Awards",
            date: new Date(),
        },
    },
};
