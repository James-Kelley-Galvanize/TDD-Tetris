import { normalize } from "./__tests__/normalize.mjs";
import { printExpected, printReceived, matcherHint } from "jest-matcher-utils";

expect.extend({
  toEqualShape(actual, expected) {
    const failMessage = (received, expected, not) => () =>
      `${matcherHint(
        `${not ? ".not" : ""}.toEqualShape`,
        "received",
        "expected"
      )}
        
Expected board shape${not ? " not " : " "}to equal:
Expected: 
${printExpected(expected)}
Received: 
${printReceived(received)}`;

    if (typeof actual !== "string") {
      throw new Error(`expected actual to be a string`);
    }

    expected = normalize(expected);
    const pass = expected === actual;

    return { pass, message: failMessage(actual, expected, pass) };
  },
});
