# ng-generator
A factory is just a singleton function that gets called. You can exploit this to create services that “inherit” from a common template by returning a function within the factory. This is useful if you want to create services that behave very similarly, but you otherwise want to split into separate services because they deal with different data. A real world example: handling data from 2 endpoints that behave similarly, but return different data. 

 To implement this, create a factory that includes all dependencies as normal. Then, inside, return a function that contains your entire “inherited” service code, and pass in parameters that modify its functionality. In the actual service, inject this factory, initialize it  by calling it and setting it to an object, optionally add parameters to the object for additional functionality, and return the object. The service can then be used like any other service.
 
 This repository is an example of how to do this and is forked off http://embed.plnkr.co/ohkXfy/ for set up purposes.
