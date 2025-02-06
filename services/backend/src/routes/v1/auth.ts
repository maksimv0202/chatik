import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (request: Request, response: Response) => {
    response.json({ path: request.originalUrl });
});

export default router;