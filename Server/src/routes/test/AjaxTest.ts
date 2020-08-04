import { Request, Response } from "express";
import { info } from "../../lib/Logger";

class AjaxTest {
  static ajaxTest (req: Request, res: Response) {
    info('sans')
    res.end(`{text: 'wa sans!'}`)
  }
}

export default AjaxTest