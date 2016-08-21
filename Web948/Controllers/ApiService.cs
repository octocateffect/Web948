﻿using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;

namespace Web948.Controllers
{
    public class SuggestPrice
    {
        public int prices { get; set; }
        public MenuItem[] items { get; set; }
    }

    public class MenuItem
    {
        public string category { get; set; }
        public string name { get; set; }
        public string[] items { get; set; }
        public string image_url { get; set; }
        public string prices { get; set; }
        public string id { get; set; }

        public int count { get; set; }
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

        public SuggestPrice GetPrices(string id, int[] list)
        {
            var str = string.Join(",", list);

            var client = new RestClient("https://best-way-948.appspot.com");

            var url = $"/getPrices?menu_id=0&orders=[{str}]";

            var request = new RestRequest(url, Method.GET);

            IRestResponse response = client.Execute(request);

            var content = response.Content;

            Console.WriteLine(content);

            var result = JsonConvert.DeserializeObject<SuggestPrice>(content);

            return result;
        }
    }
}