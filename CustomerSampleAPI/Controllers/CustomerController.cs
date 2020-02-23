using System.Collections.Generic;
using CustomerSampleAPI.MockData;
using CustomerSampleAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CustomerSampleAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return CustomersData.GetData();
        }
    }
}
