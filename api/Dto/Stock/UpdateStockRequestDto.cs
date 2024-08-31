using System.ComponentModel.DataAnnotations;

namespace api.Dto.Stock
{
    public class UpdateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot contain more than 10 characters")]
        public string Symbol { get; set; } = string.Empty;

        [Required]
        [MaxLength(100, ErrorMessage = "Company Name cannot contain more than 100 characters")]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(1, 1000000000000)]
        public decimal Purchase { get; set; }

        [Required]
        [Range(0.001, 100.0)]
        public decimal LastDiv { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "Industry cannot be over 50 characters")]
        public string Industry { get; set; } = string.Empty;

        [Range(1, 5000000000)]
        public long MarketCap { get; set; }
    }
}