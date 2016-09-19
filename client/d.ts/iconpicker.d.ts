interface IconpickerOptions {
    iconset?: string,
    cols?: number,
    footer?: boolean

}

interface JQueryEventObject {
    icon?: string
}

interface JQuery {
    // Interface to the main method of jQuery File Upload
    iconpicker(options?: IconpickerOptions | string): JQuery;
}