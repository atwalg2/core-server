import { getHelloSchema, postHelloSchema } from "./schema";
import { FastifyDefaultOps } from "../platform/Request";

const getHelloOpts = {
	schema: getHelloSchema,
	// beforeHandler: [middleware1, middleware2], // middlewares
} as FastifyDefaultOps;

const postHelloOpts = {
	schema: postHelloSchema,
	// beforeHandler: [middleware1, middleware2], // middlewares
} as FastifyDefaultOps;

export {
	getHelloOpts
}