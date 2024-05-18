/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePetDto {


    @Field()
    name: string;
}