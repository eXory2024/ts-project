export type MyObjectType = {
	a_prop : number
	another_prop : string
}

export type CreateMyObjectType = () => MyObjectType

export const createMyObject : CreateMyObjectType
