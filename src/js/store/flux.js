const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			
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
			}
		}
	}
};


export default getState;
