var Application = (function () {
    function Application() {
        var stream = new Stream('#stream');
    }
    return Application;
}());
$(function () {
    new Application();
});
var Stream = (function () {
    function Stream(id) {
        console.log('show stream ' + id);
        this.Load();
    }
    Stream.prototype.Load = function () {
    };
    Stream.prototype.Present = function (id) {
    };
    return Stream;
}());
var Api = (function () {
    function Api() {
    }
    return Api;
}());
//# sourceMappingURL=unclefucker.js.map