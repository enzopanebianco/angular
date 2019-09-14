export interface RequestUpdate{
    name:Date;
    email:string;
    createdAt:string;
}
export interface ResponseUpdate{
    name:string;
    email:string;
    createdAt:string;

}
export interface ResponseUser{
    name:string;
    id:string;
    email:string;
    createdAt:Date;

}
export interface RequestUser{
    name:string;
   
    email:string;
    createdAt:string;

}