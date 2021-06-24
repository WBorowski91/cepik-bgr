using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
 
namespace cepik.Models
{
    public class Vechicle
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public string RegistrationNumber { get; set; }
        public int OwnerId { get; set; }
        public int PolicyId { get; set; }
    }
}