class ResponseBuilder {
	private type: string;
	private properties = {};

	constructor(type: string) {
		this.type = type;
	}

	public prop(name: string, type: string) {
		this.properties = { ...this.properties, [name]: { type }}
		return this;
	}

	public build() {
		return {
			type: this.type,
			properties: this.properties
		}
	}
}
const O = 'object';
const S = 'string';
const N = 'number';
const REQUIRED = 'required' as 'required';

const SchemaTypeHelpers = {
	O,
	S,
	N,
	REQUIRED
}
export {
	ResponseBuilder,
	SchemaTypeHelpers
}