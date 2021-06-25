using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using cepik.Models;

namespace cepik.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class VechiclesController : ApiController
    {
        private CepikContext db;

        public VechiclesController(CepikContext _db)
        {
            db = _db;
        }

        // GET: api/Vechicles
        public IQueryable<Vechicle> GetVechicles()
        {
            return db.Vechicles;
        }

        // GET: api/Vechicles/5
        [ResponseType(typeof(Vechicle))]
        public IHttpActionResult GetVechicle(int id)
        {
            Vechicle vechicle = db.Vechicles.Find(id);
            if (vechicle == null)
            {
                return NotFound();
            }

            return Ok(vechicle);
        }

        // PUT: api/Vechicles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVechicle(int id, Vechicle vechicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vechicle.Id)
            {
                return BadRequest();
            }

            db.Entry(vechicle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VechicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Vechicles
        [ResponseType(typeof(Vechicle))]
        public IHttpActionResult PostVechicle(Vechicle vechicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vechicles.Add(vechicle);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = vechicle.Id }, vechicle);
        }

        // DELETE: api/Vechicles/5
        [ResponseType(typeof(Vechicle))]
        public IHttpActionResult DeleteVechicle(int id)
        {
            Vechicle vechicle = db.Vechicles.Find(id);
            if (vechicle == null)
            {
                return NotFound();
            }

            db.Vechicles.Remove(vechicle);
            db.SaveChanges();

            return Ok(vechicle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VechicleExists(int id)
        {
            return db.Vechicles.Count(e => e.Id == id) > 0;
        }
    }
}