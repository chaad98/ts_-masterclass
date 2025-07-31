// Section4, Optional and Readonly Properties

/**
 * This is the type definition for a blog post.
 * Defining a separate type like this is considered best practice,
 * as it improves maintainability compared to specifying the type inline with a function.
 */
type Post6 = {
  title: string;
  content: string;
  date: Date;
  author: Author6;
  awards: Awards6;
  category?: string; // Reperesents optional
};

/**
 * The Author6 type is a nested object used in the Post2 type.
 */
type Author6 = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai"; // Represents readonly and cannot reassigned value again
};

/**
 * The Awards6 type is a nested object used in the Post2 type.
 */
type Awards6 = {
  [key: string]: AwardDetails6;
};

/**
 * AwardDetails6 represents the structure of each award in the awards object.
 */
type AwardDetails6 = {
  name: string;
  date: Date;
};

/**
 * These are the properties of a Post6 object.
 */
let post6: Post6 = {
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

/**
 * Duplicate of Post6 Object
 */
let post6Duplicate: Post6 = {
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
};
