using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelpCenter.Web.Models
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime LastChanged { get; set; }
        public int CommentsCount { get; set; }
        public int LikesCount { get; set; }
        public int DislikesCount { get; set; }
        public string AuthorName { get; set; }
        public string AuthorAvatarUrl { get; set; }
        public bool Closed { get; set; }
    }
}
