using System;
using System.Collections.Generic;

namespace AutoSchool.Models
{
    public partial class Driving
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public double Time { get; set; }
        public double Price { get; set; }
        public int UserId { get; set; }
        public int EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual User User { get; set; }
    }
}
