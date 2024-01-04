const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje:{},
			planeta: {},
		},
		actions: {
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data.results)
					setStore({ personajes: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data.results)
					setStore({ planetas: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			personajesIndividuales: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/"+id)
					const data = await response.json()
					console.log(data)
					setStore({ personaje: data})
				} catch (error) {
					console.log(error)
				}
			},
			planetasIndividuales: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/"+id)
					const data = await response.json()
					console.log(data)
					setStore({ planeta: data})
				} catch (error) {
					console.log(error)
				}
			},
		}
	}
};


export default getState;
