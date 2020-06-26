using System;
using System.Collections.Generic;

namespace AutoSchool.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Course = new HashSet<Course>();
            Driving = new HashSet<Driving>();
        }

        public int Id { get; set; }
        public string Surname { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int PositionId { get; set; }

        public virtual Position Position { get; set; }
        public virtual ICollection<Course> Course { get; set; }
        public virtual ICollection<Driving> Driving { get; set; }
    }
}
