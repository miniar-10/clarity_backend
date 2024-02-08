import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateSharedlinkDto } from './dto/create-sharedlink.dto';
import { UpdateSharedlinkDto } from './dto/update-sharedlink.dto';

// shared-link.service.ts

import { SharedLink } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SharedLinkService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSharedlinkDto: CreateSharedlinkDto): Promise<SharedLink> {
    return this.prisma.sharedLink.create({
      data: {
        ...createSharedlinkDto, //spread operator
      },
    });
  }

  async findAll(): Promise<SharedLink[]> {
    return this.prisma.sharedLink.findMany();
  }

  async findOne(id: number): Promise<SharedLink> {
    try {const sharedLink = await this.prisma.sharedLink.findUnique({ where: { id } });
    return sharedLink;
    } catch (error) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new NotFoundException(`Shared link with ID ${id} not found`);
      }
    }
  }

  async update(id: number, updateSharedlinkDto: UpdateSharedlinkDto): Promise<SharedLink> {
    try {const existingSharedLink = await this.findOne(id); // Check if the shared link exists
    return this.prisma.sharedLink.update({
      where: { id },
      data: updateSharedlinkDto,
    });}
    catch (error) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new NotFoundException(`Shared link with ID ${id} not found`);
      }
  }
}

  async remove(id: number): Promise<SharedLink> {

    try {const existingSharedLink = await this.findOne(id); // Check if the shared link exists 
    return this.prisma.sharedLink.delete({ where: { id } });
    }
  catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new NotFoundException(`Shared link with ID ${id} not found`);
    }
    }
  }
}