using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using Web948.Controllers;

namespace Web948.Tests.Controllers
{
    [TestClass]
    public class ApiServiceTests
    {
        [TestMethod]
        public void GetMenusTest()
        {
            var traegt = new ApiService();

            var actual = traegt.GetMenus();

            Console.WriteLine(JsonConvert.SerializeObject(actual, Formatting.Indented));

        }

        [TestMethod]
        public void GetMenuItemsTest()
        {
            var traegt = new ApiService();

            var actual = traegt.GetMenuItems("mcdonalds");

            Console.WriteLine(JsonConvert.SerializeObject(actual, Formatting.Indented));
        }
    }
}