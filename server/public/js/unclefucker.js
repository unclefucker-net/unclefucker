var Application = (function () {
    function Application() {
        var _this = this;
        $('#post').on('click', function () { return _this.post(); });
        this.stream = new Stream('#stream');
    }
    Application.prototype.update = function () {
        console.log("update");
    };
    Application.prototype.post = function () {
        var _this = this;
        var text = $('#post-content').val();
        Api.call("/v1/post", {
            text: text
        }, function (response) { return _this.didPost(response); });
    };
    Application.prototype.didPost = function (response) {
        console.log("didPost", response);
    };
    return Application;
}());
$(function () {
    new Application();
});
var Stream = (function () {
    function Stream(id) {
        this.vue = new Vue({
            el: id,
            data: {
                posts: []
            }
        });
        this.fetch("whatever");
    }
    Stream.prototype.fetch = function (request) {
        var _this = this;
        Api.call("/v1/fetch", {}, function (response) { return _this.display(response); });
    };
    Stream.prototype.display = function (response) {
        console.log(response);
        this.vue.$set('posts', response.posts);
    };
    return Stream;
}());
var Api = (function () {
    function Api() {
    }
    Api.call = function (url, data, callback) {
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            traditional: true,
            data: data,
            success: callback
        });
    };
    return Api;
}());
//# sourceMappingURL=unclefucker.js.map