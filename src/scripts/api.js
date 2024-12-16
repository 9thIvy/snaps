import axios from 'axios';

const api = axios.create({
	baseURL: "http://localhost:8080",
	headers:{
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config)=>{
		if(config.url){
			config.url = `${config.url}`;
		}
		return config;
	},
	(error) =>{
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response)=>{
		return response.data;
	},
	(error)=>{
		if(error.response){
			console.error('error response: ', error.response);
		}
		else{
			console.error('error message: ', error.message);
		}
		return Promise.reject(error);
	}
);

export const getPhotos = () =>{
	return api.get('/photos');
}

export const getPhotoByID = (id) =>{
	return api.get(`/photos/${id}`);
}
export const getComments = (id) =>{
	return api.get(`/photos/${id}/comments`);
}
export const postComment = (id, commentObject )=>{
	return api.post(`/photos/${id}/comments`, commentObject);
}
export const getTags = () =>{
	return api.get('/tags');
}

export default api;