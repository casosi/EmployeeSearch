using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeeSearch.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class EmployeesController : ControllerBase
	{
		private readonly ILogger<EmployeesController> _logger;

		public EmployeesController(ILogger<EmployeesController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<Employee> Get()
		{
			return Enumerable.Range(1, 5).Select(index => new Employee
			{
				Id = index,
				firstName = "Happy",
				lastName = "Employee",
				jobTitle = "Software Engineer",
				birthDate = DateTime.Now.AddYears(-30 + index).ToShortDateString(),
				hireDate = DateTime.Now.AddYears(-5 - index).ToShortDateString(),
				separationDate = DateTime.Now.AddYears(-1 - index).ToShortDateString()
			}).ToArray();
		}
	}
}
