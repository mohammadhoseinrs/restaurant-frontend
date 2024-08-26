export interface IUserDetail {
    username?:string,
    email:string,
    password:string,
    id?:number
}

export interface IRegisterUserResponse{
    status:number,
    data:IUserDetail | null,
    error?:string
}