import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  User,
  Prisma,
} from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async index(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        city: {
          select: {
            title: true
          }
        }
      }
    })
  }

  async store(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data
    })
  }

  async show(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        city: true
      }
    })
  }

  async update(data: Prisma.UserUpdateInput, id: number): Promise<String> {
    this.prisma.user.update({
      data,
      where: { id }
    })
    return id + 'skjd';
  }

  async delete(id: number) {
    await this.prisma.user.delete({
      where: { id }
    })
    return { message: "Foydalanuvchi o'chirildi" }
  }
}