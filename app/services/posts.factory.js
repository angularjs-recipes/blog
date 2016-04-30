(function () {
	angular
		.module('blogApp')
		.factory('postsFactory', postsFactory);

	postsFactory.$inject = ['$http'];

	function postsFactory($http) {
		return {
			all: all,
			get: get
		};

		function all() {
			return $http.get('http://angularjs-recipes.com/demo/posts');
		}

		function get(id) {
			return $http.get('http://angularjs-recipes.com/demo/posts/' + id);
		}
	}
})();
