using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelpCenter.Web.Models
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public string AuthorName { get; set; }
        public string AuthorAvatarUrl { get; set; }
        public DateTime LastChanged { get; set; }
        public string Body { get; set; }
    }
}
