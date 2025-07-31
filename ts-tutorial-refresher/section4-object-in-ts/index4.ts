// Section4, Index Signatures With Objects

/**
 * This is the type definition for a blog post.
 * Defining a separate type like this is considered best practice,
 * as it improves maintainability compared to specifying the type inline with a function.
 */
type Post2 = {
  title: string;
  content: string;
  date: Date;
  author: Author2;
  awards: Awards2;
};

/**
 * The Author2 type is a nested object used in the Post2 type.
 */
type Author2 = {
  name: string;
  age: number;
  email: string;
};

/**
 * The Awards2 type is a nested object used in the Post2 type.
 */
type Awards2 = {
  [key: string]: AwardDetails;
};

/**
 * AwardDetails represents the structure of each award in the awards object.
 */
type AwardDetails = {
  name: string;
  date: Date;
};

/**
 * These are the properties of a Post object.
 */
let post2: Post2 = {
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
