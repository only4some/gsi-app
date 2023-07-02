export interface ErrorDetails{
	code:string,
	message:string
}
export interface ResponseData{
	error?:ErrorDetails,
	data?:any
}
class ApiResponse{
	constructor(public payload:ResponseData){

	}
}
export default ApiResponse