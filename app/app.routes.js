(function() {
    angular
        .module('blogApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'PostsController as postsCtl',
                templateUrl: 'app/views/postsPage.template.html'
            })
            .when('/posts/:postID/:slug', {
                controller: 'PostController as postCtl',
                templateUrl: 'app/views/postPage.template.html'
            })
            .when('/error', {
                controller: 'ErrorController as errorCtl',
                templateUrl: 'app/views/errorPage.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
