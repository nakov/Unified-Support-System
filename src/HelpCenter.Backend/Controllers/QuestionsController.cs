using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpCenter.Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpCenter.Backend.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        // GET: api/questions
        [HttpGet]
        public IEnumerable<QuestionViewModel> GetQuestions(
            string course, string lesson, string section)
        {
            return new QuestionViewModel[] {
                new QuestionViewModel() {
                    Id = 1,
                    Title = "Question 1",
                    Body = "Body 1",
                    LastChanged = DateTime.Now,
                    AuthorName = "Dorobeica Andra",
                    CommentsCount = 2,
                    Closed = false
                },
                new QuestionViewModel() {
                    Id = 2,
                    Title = "Question 2",
                    Body = "Body 2",
                    LastChanged = DateTime.Now,
                    AuthorName = "Peter Green",
                    CommentsCount = 3,
                    Closed = true
                },
                new QuestionViewModel() {
                    Id = 3,
                    Title = "Question 3",
                    Body = "Body 3",
                    LastChanged = DateTime.Now,
                    AuthorName = "Steve Red",
                    CommentsCount = 0,
                    Closed = false
                },
            };
        }

        // GET: api/questions/5/comments
        [HttpGet("{questionId}/comments")]
        public IEnumerable<CommentViewModel> Get(int questionId)
        {
            return new CommentViewModel[]
            {
                new CommentViewModel() {
                    Id = 1,
                    Body = "Comment 1",
                    LastChanged = DateTime.Now,
                    AuthorName = "Svetlin Nakov",
                },
                new CommentViewModel() {
                    Id = 2,
                    Body = "Comment 2",
                    LastChanged = DateTime.Now,
                    AuthorName = "SoftUni Support",
                },
                new CommentViewModel() {
                    Id = 3,
                    Body = "Comment 3",
                    LastChanged = DateTime.Now,
                    AuthorName = "Svetlin Nakov",
                },
            };
        }

        // POST: api/questions
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
    }
}
