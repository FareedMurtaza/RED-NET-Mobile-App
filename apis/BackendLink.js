import axios from "axios";

export const BackendLink = axios.create({
	baseURL: "http://192.168.31.102:8090/rednet",
	headers: {
		"Content-type": "application/x-www-form-urlencoded",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});

