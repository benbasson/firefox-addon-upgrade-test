# Firefox Add-on Upgrade Test

This is a basic test-case for upgrading from a XUL-based Firefox add-on to one written with the new add-on SDK. 

I am attempting to demonstrate that when the upgrade occurs, the "upgrade", "install" or "enable" events are never presented as a "load reason" to the add-on, unless further action is taken by the end user.

This is a problem as it means there's no sensible place to hook code that initialises an add-on. The only workaround I have found so far is to listen for the "startup" load reason, i.e. a normal browser startup and then store a preference to know whether or not to run additional code. This is clearly suboptimal.

If I find further information to improve this process, I will update this readme and code samples.