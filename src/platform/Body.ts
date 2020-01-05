
class BodyBuilder {
	private type: string;
	private required = []
	private properties = {};

	constructor(type: string) {
		this.type = type;
	}

	public prop(name: string, type: string, requiredRule?: 'required') {
		this.properties = { ...this.properties, [name]: { type }}
		if (requiredRule === 'required') {
			this.required = [...this.required, name]
		}
		return this;
	}

	public build() {
		return {
			type: this.type,
			required: this.required,
			properties: this.properties
		}
	}
}

export {
	BodyBuilder
}