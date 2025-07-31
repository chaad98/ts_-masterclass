// Section4, Optional and Readonly Properties

/**
 * This is the type definition for a blog post.
 * Defining a separate type like this is considered best practice,
 * as it improves maintainability compared to specifying the type inline with a function.
 */
type Post5 = {
  title: string;
  content: string;
  date: Date;
  author: Author5;
  awards: Awards5;
  category?: string; // Reperesents optional
};

/**
 * The Author5 type is a nested object used in the Post2 type.
 */
type Author5 = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai"; // Represents readonly and cannot reassigned value again
};

/**
 * The Awards5 type is a nested object used in the Post2 type.
 */
type Awards5 = {
  [key: string]: AwardDetails5;
};

/**
 * AwardDetails5 represents the structure of each award in the awards object.
 */
type AwardDetails5 = {
  name: string;
  date: Date;
};

/**
 * These are the properties of a Post5 object.
 */
let post5: Post5 = {
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

let post5Duplicate: Post5 = {
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
