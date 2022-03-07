import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    index()
    {
        return this.userService.index();
    }

    @Post()
    store(@Body() data: Prisma.UserCreateInput){
        return this.userService.store(data);
    }

    @Get(':id')
    show(@Param('id') id: number){
        return this.userService.show(+id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput){
        return this.userService.update(data,id)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.delete(+id)
    }
}
