/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { DataSource } from 'typeorm';
import { CreatePetDto } from './dto/create_pet.dto';

'typeorm';

@Injectable()
export class PetsService {
    constructor(private dataSource: DataSource) { }

    async findAllPet(): Promise<Pet[]> {


        return await this.dataSource.getRepository(Pet).find();
    }

    async addPet(createPetDto: CreatePetDto): Promise<Pet> {
        const n = new Pet(createPetDto.name);
        console.log(n);
        return this.dataSource.manager.save(n);
    }
}
