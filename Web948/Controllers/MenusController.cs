using RestSharp.Extensions.MonoHttp;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Web948.Controllers
{
    public class GetPriceModel
    {
        public List<int> list { get; set; }
    }

    public class MenusController : Controller
    {
        // GET: Menus
        [HttpGet]
        public ActionResult Index()
        {
            var service = new ApiService();

            return Json(service.GetMenus(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Items(string id)
        {
            var service = new ApiService();

            return Json(service.GetMenuItems(HttpUtility.UrlDecode(id)), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPrice(GetPriceModel model)
        {
            var service = new ApiService();

            if (model.list == null)
            {
                model.list = new List<int>() { 1, 2, 3 };
            }

            return Json(service.GetPrices("0", model.list.ToArray()), JsonRequestBehavior.AllowGet);
        }
    }
}