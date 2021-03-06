import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from 'express';
import { Session, SessionData } from "express-session";

interface IUserAuth {
    userId: number;
}

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    req: Request & { session: Session & Partial<SessionData & IUserAuth>};
    res: Response;
}