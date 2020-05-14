import FetchError from "../error/FetchError";

export default class FetchUtil {
    static request = async (url, options) => {
        try {
            const response = await fetch(url, options);
            const jsonBody = await response.json();
            if (response.ok) return jsonBody;
            return new FetchError(response, jsonBody);
        } catch (e) {
            console.log(e);
        }
    }
}