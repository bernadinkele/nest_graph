import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver('Owner')
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation('createOwner')
  create(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query('owner')
  findAll() {
    return this.ownerService.findAll();
  }

  @Query('owner')
  findOne(@Args('id') id: number) {
    return this.ownerService.findOne(id);
  }

  @Mutation('updateOwner')
  update(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation('removeOwner')
  remove(@Args('id') id: number) {
    return this.ownerService.remove(id);
  }
}
