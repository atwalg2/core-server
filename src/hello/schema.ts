import { RouteSchema } from "fastify";
import { SchemaTypeHelpers, ResponseBuilder } from "../platform/Schema";
import { BodyBuilder } from "../platform/Body";

const { S, O, N, REQUIRED } = SchemaTypeHelpers;

const getHelloResponse = new ResponseBuilder('object').prop('hello', S).build();
const getHelloSchema = {
	response: {
		200: getHelloResponse
	}
} as RouteSchema;

const postHelloBody = new BodyBuilder('object').prop('name', S, REQUIRED).build();
const postHelloResponse = new ResponseBuilder('object').prop('hello', S).build();
const postHelloSchema = {
	body: postHelloBody,
	response: {
		200: postHelloResponse
	},
} as RouteSchema;

export {
	getHelloSchema,
	postHelloSchema
}

