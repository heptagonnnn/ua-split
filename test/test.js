import UserAgentSplit from "../src/index.js";
import assert from "assert";


describe('UserAgent', function() {

    it("format useragent", function() {
        const ua = "build/1110000 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36";
        const uaTargetResult = {
            "Mozilla": {
                product: "Mozilla",
                productVersion: "5.0",
                comment: "(Macintosh; Intel Mac OS X 11_1_0)"
            },
            "AppleWebKit": {
                product: "AppleWebKit",
                productVersion: "537.36",
                comment: "(KHTML, like Gecko)"
            },
            "Chrome": {
                product: "Chrome",
                productVersion: "88.0.4324.96",
                comment: ""
            },
            "Safari": {
                product: "Safari",
                productVersion: "537.36",
                comment: ""
            },
            "build": {
                product: "build",
                productVersion: "1110000",
                comment: ""
            }
        }
        const split = new UserAgentSplit(ua);
        const mochaResult = split.parse();
        assert.strict.deepStrictEqual(mochaResult, uaTargetResult);
    })
});