using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace cepik.Models
{
    public class CepikContext : DbContext
    {
        public CepikContext() : base("name=Cepik")
        {

        }

        public DbSet<Driver> Drivers { get; set; }

        public DbSet<Policy> Policies { get; set; }

        public DbSet<Vechicle> Vechicles { get; set; }
    }
}