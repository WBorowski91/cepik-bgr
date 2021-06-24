using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
 
namespace cepik.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string DrivingLicenceCategory { get; set; }
    }
}