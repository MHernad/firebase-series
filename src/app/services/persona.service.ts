import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Persona from '../interfaces/datos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private firestore: Firestore) {}

  addPersona( persona: Persona) {
    const personaRef = collection(this.firestore, 'personas', );
    return addDoc(personaRef, persona);
  }

  getPersona(): Observable<Persona[]>{
    const personaRef = collection(this.firestore, 'personas', );
    return collectionData(personaRef, { idField: 'id'}) as Observable<Persona[]>;
  }

  deletePersona(persona: Persona){
    const personaDocRef = doc(this.firestore, `personas/${persona.id}`)
    return deleteDoc(personaDocRef);
  }
}
