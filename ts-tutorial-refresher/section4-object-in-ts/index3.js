"use strict";
// Section4, Nested Objects
/**
 * These are the properties of a Post object.
 */
let post1 = {
    title: "This is blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "Nested Author",
        age: 69,
        email: "nestedAuhor@gmail.com",
    },
};
