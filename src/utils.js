export function getCookie(cookies, name) {
    var c = new RegExp(name + "=[^;]+").exec(cookies);
    return c ? c[0].replace(name + '=', ''): null;
}