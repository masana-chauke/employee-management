import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  /* public getData(id:any):Observable< any[]>{
    return this.http.get<any>("https://fakestoreapi.com/products")
  }

  public getOne(id:any):Observable <any[]>{
    return this.http.get<any>(`https://fakestoreapi.com/products${id}`)
  }

  public addData(val:any):Observable<any>{
    return this.http.post("https://fakestoreapi.com/products", val)
  }

  public updateData(val:any, id:any){
    return this.http.put("https://fakestoreapi.com/products"+id, val)
  }
  public deleteData(id:any){
    return this.http.delete("https://fakestoreapi.com/products"+id)


  } */


  getEmployeeAll(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/users')

  }

  getEmployee(id:number){
    return this.http.get('https://fakestoreapi.com/products%27'+id)

  }


  addEmployee(body:any){
    this.http.post('https://fakestoreapi.com/products%27',body)
  }

  updateEmployee(id:number,body:any){
      return this.http.put('https://fakestoreapi.com/products%27'+id,body)
  }

 deleteData(id:any){
    return this.http.delete("https://fakestoreapi.com/products"+id)
  }
}
