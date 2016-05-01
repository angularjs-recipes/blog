(function () {
	angular
		.module('blogApp')
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider
			.when('/', {
				controller: 'PostsController as postsCtl',
				resolve: {
					posts: postsPrepFactory
				},
				templateUrl: 'app/views/posts.template.html'
			})
			.when('/posts/:postID/:slug', {
				controller: 'PostController as postCtl',
				resolve: {
					post: postPrepFactory
				},
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

	postsPrepFactory.$inject = ['postsFactory'];

	function postsPrepFactory(postsFactory) {
		return postsFactory
			.all()
			.then(function (response) {
				return response.data;
			});
	}

	postPrepFactory.$inject = ['postsFactory', '$route'];

	function postPrepFactory(postsFactory, $route) {
		return postsFactory
			.get($route.current.params.postID)
			.then(function (response) {
				return response.data;
			});
	}
})();
