"use strict";
// Section4, Index Signatures With Objects
/**
 * These are the properties of a Post object.
 */
let post2 = {
    title: "This is blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "Nested Author",
        age: 69,
        email: "nestedAuhor@gmail.com",
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
