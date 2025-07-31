// Section 4, Discriminating Unions

/**
 * Represents a loading network state.
 * Used as the discriminant with `state: "loading"`.
 */
type NetworkLoadingState = {
  state: "loading";
};

/**
 * Represents a failed network state.
 * Includes an error code to identify the failure.
 */
type NetworkFailedState = {
  state: "failed";
  code: number;
};

/**
 * Represents a successful network response.
 * Includes a nested `response` object with details.
 */
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

/**
 * Union type of all possible network states.
 * This is a discriminated union — the `state` field determines the shape of the object.
 */
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

/**
 * A function that logs a message based on the network state.
 * TypeScript uses the `state` discriminant to safely narrow each case.
 */
function logger(state: NetworkState) {
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
console.log(
  logger({
    state: "success",
    response: {
      title: "Connect OK!",
      duration: 200,
      summary: "Successfully connected!",
    },
  })
);
