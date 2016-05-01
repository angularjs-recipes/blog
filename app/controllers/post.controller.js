(function() {
    angular
        .module('blogApp')
        .controller('PostController', PostController);

    PostController.$inject = ['post'];

    function PostController(post) {
        var self = this;
        self.post = post;
		self.disqusConfig = {
			disqus_shortname: 'my-bloggie',
			disqus_identifier: 'post-' + self.post.id,
			disqus_url: 'http://127.0.0.1:8080/#!/posts/'+self.post.id+'/'+self.post.slug
		};
    }
})();
