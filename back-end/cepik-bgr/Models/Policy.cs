using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
 
namespace cepik.Models
{
    public class Policy
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Company { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int VechicleId { get; set; }
    }
}