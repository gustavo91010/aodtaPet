import PetEntity from "../../entities/PetEntity";
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void | Promise<void>;
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
  atualizaPet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;
  adotaPet(
    idPet: number,
    idAdotante: number
  ): Promise<{ success: boolean; message?: string }> | void;
  buscaPetPeloPorte(porte: EnumPorte): Promise<PetEntity[]> | void;

  // Tipo extends keyof PetEntity, sera os tipos encontardos na classe PetEntity
  buscaPetPorCampogenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
     valor: PetEntity[Tipo]
     ): Promise<PetEntity[]> | PetEntity[];
}
