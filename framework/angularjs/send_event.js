function send_event() {
	// broadcast event down to decendents
	function firstCtrl($scope) {
	  $scope.$broadcast('someEvent', [1,2,3]);
	}
	// emit up to ancestor
	function secondCtrl($scope){
	  $scope.$emit('someEvent', [1,2,3]);
	}
	// if element at same level, get rootScope and then broadcast
	function firstCtrl($rootScope){
		$rootScope.$broadcast('someEvent', [1,2,3]);
	}
}