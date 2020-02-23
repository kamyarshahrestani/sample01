# **Sample Project**

This is a sample project with the following specification :

##### IDE And Runtime
1.  Build in Microsoft IDE `Microsoft Visual Studio Community 2019
Version 16.4.5`
2. netcoreapp3.1
3. Angular cli @8.3.14

##### Details
1. Simple API endpoint `CustomerController` with mock data memory object `CustomersData`.
2. Angular project is located inside `ClientApp` folder.
3. Angular App could be separate from .net core project, but in this sample project I assumed there is only one domain and I do not have any cross-origin, so, I use `Microsoft.AspNetCore.SpaServices.Extensions`.
4. There is only one route that is implemented without lazing loading and inside I have implemented simple list view (without any graphical interface).

