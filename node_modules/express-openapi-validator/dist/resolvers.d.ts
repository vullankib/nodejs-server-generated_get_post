import { RequestHandler } from "express";
import { RouteMetadata } from "./framework/openapi.spec.loader";
export declare function defaultResolver(handlersPath: string, route: RouteMetadata): RequestHandler;
export declare function modulePathResolver(handlersPath: string, route: RouteMetadata): RequestHandler;
