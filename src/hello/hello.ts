import { FastifyReq, FastifyRes, FastifyPostRequest } from '../platform/Request';

const getHello = async (req: FastifyReq, reply: FastifyRes) => {
	return { hello: 'world' };
}

interface PostHelloBody {
	name: string
}
const postHello = async (req: FastifyPostRequest<PostHelloBody>, res: FastifyRes) => {
	return { hello: `${req.body?.name} World` };
}

export {
	getHello,
	postHello
}