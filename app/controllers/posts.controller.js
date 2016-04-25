(function() {
    angular
        .module('blogApp')
        .controller('PostsController', PostsController);

    PostsController.$inject = [];

    function PostsController() {
        var self = this;
    }
})();
