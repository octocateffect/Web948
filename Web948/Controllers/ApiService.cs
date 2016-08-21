using Newtonsoft.Json;
using RestSharp;
using System.Collections.Generic;

namespace Web948.Controllers
{
    public class MenuItem
    {
        public string category { get; set; }
        public string name { get; set; }
        public string[] items { get; set; }
        public string image_url { get; set; }
        public string prices { get; set; }
        public string id { get; set; }
    }

    public class Menu
    {
        public string path_to_file { get; set; }
        public string title { get; set; }
        public string image_url { get; set; }
        public string menu_id { get; set; }
        public string name { get; set; }
    }

    public class ApiService
    {
        public List<Menu> GetMenus()
        {
            var client = new RestClient("https://best-way-948.appspot.com");

            var request = new RestRequest("/menus", Method.GET);

            IRestResponse response = client.Execute(request);

            var content = response.Content;

            var result = JsonConvert.DeserializeObject<List<Menu>>(content);

            return result;
        }

        public List<MenuItem> GetMenuItems(string name)
        {
            var client = new RestClient("https://best-way-948.appspot.com");

            var request = new RestRequest($"/menus/{name}", Method.GET);

            IRestResponse response = client.Execute(request);

            var content = response.Content;

            var result = JsonConvert.DeserializeObject<List<MenuItem>>(content);

            return result;
        }
    }
}