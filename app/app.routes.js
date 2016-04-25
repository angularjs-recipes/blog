(function() {
    angular
        .module('blogApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'PostsController as postsCtl',
                templateUrl: 'app/views/posts.template.html'
            })
            .when('/posts/:postID/:slug', {
                controller: 'PostController as postCtl',
                templateUrl: 'app/views/post.template.html'
            })
            .when('/error', {
                controller: 'ErrorController as errorCtl',
                templateUrl: 'app/views/error.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
