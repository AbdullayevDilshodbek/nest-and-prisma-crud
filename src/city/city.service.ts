import { Injectable } from '@nestjs/common';
import { City, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityService {
  constructor (private prisma: PrismaService){}

  async create(data: Prisma.CityCreateInput): Promise<City>
  {
    return this.prisma.city.create({
      data
    })
  }

  findAll() {
    return `This action returns all city`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
