using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoSchool.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutoSchool.Controllers
{
    [Route("api")]
    [ApiController]
    public class AutoSchoolController : ControllerBase
    {
        private readonly AutoSchoolContext _ctx = new AutoSchoolContext();

        [HttpGet("courses")]
        public List<Course> GetCourses()
        {
            return _ctx.Course.Include("Employee").Include("User").ToList();
        }

        [HttpGet("employees")]
        public List<Employee> GetEmployees()
        {
            return _ctx.Employee.Include("Position").ToList();
        }
    }
}