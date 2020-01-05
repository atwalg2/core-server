import { FastifyRequest, FastifyReply, RouteShorthandOptions } from 'fastify';
import { IncomingMessage, ServerResponse, Server } from 'http';

type FastifyReq = FastifyRequest<IncomingMessage>;
type FastifyRes = FastifyReply<ServerResponse>;

type DefaultQuery = { [k: string]: any }
type DefaultParams = { [k: string]: any }
type DefaultHeaders = { [k: string]: any }
type DefaultBody = any
type FastifyDefaultOps = RouteShorthandOptions<Server, IncomingMessage, ServerResponse, DefaultQuery, DefaultParams, DefaultHeaders, DefaultBody>;

interface FastifySuperRequest<Query = DefaultQuery, Body = {name: string}, Params = DefaultParams, Headers = DefaultHeaders>
	extends FastifyRequest<IncomingMessage, Query | any, Params | DefaultParams, Headers | DefaultHeaders, Body | any> {
}

interface FastifyPostRequest<Body, Query = DefaultQuery, Params = DefaultParams, Headers = DefaultHeaders>
	extends FastifyRequest<IncomingMessage, Query, Params, Headers, Body> {
}

export {
	FastifyReq,
	FastifyRes,
	DefaultQuery,
	DefaultParams,
	DefaultHeaders,
	FastifyDefaultOps,
	FastifySuperRequest,
	FastifyPostRequest
}