/*


Note: All services in Angular are singletons. 
That means that the injector uses each recipe 
at most once to create the object. The injector 
then caches the reference for all future needs.

 */


/*

The DemoController is instantiated via its constructor, 
every time the app needs an instance of DemoController 
(in our simple app it's just once). So unlike services, 
controllers are not singletons. 


factory is also a singleton.

provider is also a singleton. 

 */