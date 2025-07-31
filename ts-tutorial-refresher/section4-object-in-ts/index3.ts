// Section4, Nested Objects

/**
 * This is the type definition for a blog post.
 * Defining a separate type like this is considered best practice,
 * as it improves maintainability compared to specifying the type inline with a function.
 */
type Post1 = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

/**
 * The Author type is a nested object used in the Post1 type.
 */
type Author = {
  name: string;
  age: number;
  email: string;
};

/**
 * These are the properties of a Post object.
 */
let post1: Post1 = {
  title: "This is blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "Nested Author",
    age: 69,
    email: "nestedAuhor@gmail.com",
  },
};
