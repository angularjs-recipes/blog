(function() {
    angular
        .module('blogApp')
        .controller('PostController', PostController);

    PostController.$inject = [];

    function PostController() {
        var self = this;
    }
})();
