/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create_pet.dto';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petservice: PetsService) { }

    @Query(returns => [Pet])
    async findPet(): Promise<Pet[]> {
        return this.petservice.findAllPet();
    }

    @Mutation(returns => Pet)
    async addPet(@Args("createPetDto") createPetDto: CreatePetDto): Promise<Pet> {

        return this.petservice.addPet(createPetDto);
    }
}
