# ua-split

ua-split can help you split user agent info

it's very lightweight and only for split

not support detect user agent environment yet

## Install

```shell
npm install --save ua-split
```

## Example

```javascript
import UserAgentSplit from "ua-split";

const uaObject = new UserAgentSplit().parse();

/*

navigator.userAgent: 

"build/1110000 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"

uaObject: 
{
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
 */


// if in Node

const uaObject = new UserAgentSplit("useragent you need to split").parse();
```
