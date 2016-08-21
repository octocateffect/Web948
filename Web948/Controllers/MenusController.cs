using RestSharp.Extensions.MonoHttp;
using System.Web.Mvc;

namespace Web948.Controllers
{
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
    }
}