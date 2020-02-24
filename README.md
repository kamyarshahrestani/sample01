# **Sample Project**

This is a sample project with the following specification :

##### IDE And Runtime
1.  Build in Microsoft IDE `Microsoft Visual Studio Community 2019
Version 16.4.5`
2. netcoreapp3.1
3. Angular cli @8.3.14

##### Details
1. Simple API endpoint `CustomerController` with mock data memory object `CustomersData`.
2. Angular could run standalone by IIS or by ng serve|serve --aot commmands from `AngularClient` folder.
3. This small app could also run at different origin Cors supprt, in this case the developer needs to config `app.config.ts` in angular app and also config origin in `startup.cs` in core service.
4. There is routing module and also with lazing loading module.
