/*global angular */
angular.module('the.directive.module')
    .directive('chooseIntegration', ['$compile', 'dataService', function ($compile, dataService) {
        'use strict';
        return {
            restrict: 'E',

            replace: true,

            template: '<div></div>',

            link: function postLink(scope, iElement, iAttrs) {

                // New service handling directive has to be added to this map
                var typeDirectiveMap = {
                    1: 'inbound',
                    2: 'outbound',
                    3: 'rss',
                    4: 'remotebot',
                    5: 'weixin',
                    6: 'mail',
                    7: 'weibo',
                    8: 'command',
                    9: 'flurry',
                    10: 'trello'
                };

                // Step 1 - create element with directive tag
                // Create new element with directive tag
                // Note: need to create an element using angular.element, and then append the element. 
                //       Don't append string directively, since "<" in string will be escaped when you append.
                var newElement = angular.element('<' + typeDirectiveMap[iAttrs.type] + '></' + typeDirectiveMap[iAttrs.type] + '>');

                // Step 2 - append the new element (don't append string for reason above)
                iElement.append(newElement);

                // Step 3 - Compile the new element with directive or it will not execute.
                $compile(iElement)(scope);

                scope.generateNewToken = function () {
                    dataService.integration.generateToken(scope.service._id)
                        .success(function (result) {
                            scope.service.addition.token = result.data;
                        })
                        .error(function () {
                            util.msg.error('Generate Token error');
                        });
                };
            }
        };
    }]);
