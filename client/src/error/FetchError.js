export default class FetchError extends Error {
    constructor(response, jsonBody) {
        super(response.statusText);
        this.name = "FetchError";
        this.code = response.status;
        this.url = response.url;

        if (jsonBody) {
            this.message = jsonBody.message;
        }
    }
}