using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerSampleAPI.Models
{
    public class Customer
    {
        public Customer()
        {
            // initial model id
            this.Id = Guid.NewGuid();
        }

        public Customer(
            string CustomerName,
            string CustomerAddress,
            decimal Price,
            string BrokerName,
            string BrokerAddress,
            DateTime ContractStartDate,
            DateTime ContractEndDate) : this()
        {

            this.CustomerName = CustomerName;
            this.CustomerAddress = CustomerAddress;
            this.Price = Price;
            this.BrokerName = BrokerName;
            this.BrokerAddress = BrokerAddress;
            this.ContractStartDate = ContractStartDate;
            this.ContractEndDate = ContractEndDate;
        }

        [Key]
        private Guid _Id;
        public Guid Id
        {
            get
            {
                return _Id;
            }
            private set
            {
                _Id = value;
            }
        }

        // Customer Name
        public string CustomerName { get; set; }

        // Customer Address
        public string CustomerAddress { get; set; }

        // Total Price 
        public decimal Price { get; set; }

        // Broker Name 
        public string BrokerName { get; set; }

        // Broker Address
        public string BrokerAddress { get; set; }

        // Contract Start Date 
        public DateTime ContractStartDate { get; set; }

        // Contract End Date
        public DateTime ContractEndDate { get; set; }
    }
}
