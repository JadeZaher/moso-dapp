export class UrlHelpers {
    static EncodeGetParams: (paramater: object) => string = (p: object) => 
        Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");
}