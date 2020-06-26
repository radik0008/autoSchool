using System;
using System.Collections.Generic;

namespace AutoSchool.Models
{
    public partial class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public DateTime? Date { get; set; }
        public string ClassDays { get; set; }
        public int UserId { get; set; }
        public int EmployeeId { get; set; }
        public string Time { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual User User { get; set; }
    }
}
