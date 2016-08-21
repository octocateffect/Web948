using System.Web.Mvc;

namespace Web948.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        //[HttpGet]
        //public ActionResult Menus()
        //{
        //    var servie = new ApiService();

        //    var result = servie.GetMenus();

        //    return Json(result, JsonRequestBehavior.AllowGet);
        //}

        //[HttpGet]
        //public ActionResult MenusItem(string id)
        //{
        //    var servie = new ApiService();

        //    var result = servie.GetMenuItems(id);

        //    return Json(result, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult About()
        //{
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}
    }
}