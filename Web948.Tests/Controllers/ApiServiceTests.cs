using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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

        [TestMethod]
        public void GetPricesTest()
        {
            var traegt = new ApiService();

            var list = new List<int> { 1, 2, 3 };

            var actual = traegt.GetPrices("0", list.ToArray());

            Console.WriteLine(JsonConvert.SerializeObject(actual, Formatting.Indented));
        }
    }
}