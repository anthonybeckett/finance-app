using System.ComponentModel.DataAnnotations;

namespace api.Dto.Comment
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title cannot be less than 5 characters")]
        [MaxLength(280, ErrorMessage = "Title cannot be greater than 280 characters")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Content cannot be less than 5 characters")]
        [MaxLength(280, ErrorMessage = "Content cannot be greater than 280 characters")]
        public string Content { get; set; } = string.Empty;
    }
}