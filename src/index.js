const splitRegExp = /( \(.*?\) )/ig;


export default class UserAgentSplit {
    constructor(uaString) {
        this.uaString = uaString
            ? uaString
            : window
                ? window.navigator.userAgent
                : "";
        this.result = null;
    }


    parse() {

        if (this.result) {
            return this.result;
        }

        const tmpObject = {};
        const tmpArr = [];
        this.uaString.split(splitRegExp).forEach(str => {
            str = str.trim();

            if (str.indexOf("(") === 0) {
                tmpArr.push(str);
            } else {
                tmpArr.push(...str.split(" "));
            }
        })


        tmpArr.forEach((product, index, arr) => {
            let tmp = null;
            let comment = "";
            if (product.indexOf("(") === 0) {

                if (!index) {
                    return;
                }
                comment = product;
                product = arr[index - 1];
            }
            tmp = this.split(product, comment);
            tmpObject[tmp.product] = tmp;
        });

        this.result = tmpObject || {};
        return this.result;
    }


    split(productString = "", comment = "") {
        const [product = "", productVersion = ""] = productString.split("/");
        return {
            product,
            productVersion,
            comment
        }
    }
}