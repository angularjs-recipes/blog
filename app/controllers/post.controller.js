(function() {
    angular
        .module('blogApp')
        .controller('PostController', PostController);

    PostController.$inject = ['post'];

    function PostController(post) {
        var self = this;
        self.post = post;
    }
})();
