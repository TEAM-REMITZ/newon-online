import { Application, Router as exRouter } from "express";
import { AjaxTest } from "./routes";
import { success } from "../lib/Logger";

class Router {
  static init (app: Application, router: exRouter) {
    router.route('/test/ajax').post(AjaxTest.ajaxTest)

    app.use(router)
    success('Router is Ready')
  }
}

export default Router