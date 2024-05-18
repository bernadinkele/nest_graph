import { CreateOwnerInput } from './create-owner.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  id: number;
}
