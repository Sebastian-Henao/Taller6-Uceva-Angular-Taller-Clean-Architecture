import { Observable } from "rxjs";
import { Personaje } from "../models/personaje.model";

export abstract class PersonajeRepository {
    abstract getAll(countPersonajes: number): Observable<Personaje[]>;
}