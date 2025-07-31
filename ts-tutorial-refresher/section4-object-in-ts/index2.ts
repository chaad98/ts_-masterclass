// Section4, Type Alias for Objects

/**
 * This is the type definition for a blog post.
 * Defining a separate type like this is considered best practice,
 * as it improves maintainability compared to specifying the type inline with a function.
 */
type Post = {
  title: string;
  content: string;
  date: Date;
};

/**
 * These are the properties of a Post object.
 */
let post: Post = {
  title: "This is blog post",
  content: "Content of the post",
  date: new Date(),
};
