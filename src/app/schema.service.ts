import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchemaDetails } from './schema-details/schema-details.model';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  public readonly URI = 'http://localhost:18080/subjects';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<string[]> {
    return <Observable<string[]>> this.http.get(this.URI);
  }

  public findOne(schemaName: string, version: number): Observable<SchemaDetails> {
    return <Observable<SchemaDetails>> this.http.get(`${this.URI}/${schemaName}/versions/${version}`);
  }

  public findVersions(schemaName: string): Observable<Array<string>> {
    return <Observable<Array<string>>> this.http.get(`${this.URI}/${schemaName}/versions`);
  }

  add(param: { schemaId: string; schema: string }) {
    const headers = new HttpHeaders({'Content-Type': 'application/vnd.schemaregistry.v1+json; charset=utf-8'});
    return <Observable<any>> this.http.post(`${this.URI}/${param.schemaId}/versions`, param.schema, {headers});
  }

  delete(schemaName: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/vnd.schemaregistry.v1+json; charset=utf-8'});
    return this.http.delete(`${this.URI}/${schemaName}`, {headers});
  }

  deleteVersion(schemaName: string, version: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/vnd.schemaregistry.v1+json; charset=utf-8'});
    return this.http.delete(`${this.URI}/${schemaName}/versions/${version}`, {headers});
  }
}
