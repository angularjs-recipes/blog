(function() {
    angular
        .module('blogApp')
        .controller('ErrorController', ErrorController);

    ErrorController.$inject = [];

    function ErrorController() {
        var self = this;
    }
})();
