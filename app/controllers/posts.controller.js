(function() {
    angular
        .module('blogApp')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['posts'];

    function PostsController(posts) {
        var self = this;
        self.posts = posts;
    }
})();
