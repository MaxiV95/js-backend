import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  users: { id: number; name: string; lastName: string; age: number }[];
  id: number;

  constructor(private readonly appService: AppService) {
    this.users = [
      {
        id: 1,
        name: 'a',
        lastName: 'a',
        age: 18,
      },
      {
        id: 2,
        name: 'b',
        lastName: 'b',
        age: 19,
      },
      {
        id: 3,
        name: 'c',
        lastName: 'c',
        age: 20,
      },
    ];
    this.id = this.users.length;
  }

  @Get('/hello') // Al llevar @ indica que es un decorador
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/items')
  getItems(@Query() queries): any {
    const { page } = queries;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return { item: items[page - 1] };
  }

  @Get('api/esPar')
  getEsPar(@Query('esPar') esPar, @Query('otro') otro): number[] {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(otro);
    return esPar === 'true'
      ? items.filter((item) => item % 2 === 0)
      : items.filter((item) => item % 2 !== 0);
  }

  // @Get('api/:id/:name')
  // getID(@Param() params): any {
  //   console.log(params);

  //   const items = [
  //     { id: 1, name: 'item 1' },
  //     { id: 2, name: 'item 2' },
  //     { id: 3, name: 'item 3' },
  //   ];

  //   const searchId = params.id;
  //   const item = items.find((item) => +item.id === +searchId);

  //   return { item, params };
  // }

  // ----- Ejercicio -----

  @Get('api/users')
  getUsers(): object[] {
    return this.users;
  }

  @Get('api/users/qty')
  getUsersQty(): object {
    return { num: this.users.length };
  }

  @Get('api/users/:id')
  getUsersId(@Param() params): object {
    return this.users.find((item) => +item.id === +params.id);
  }

  @Post('api/users')
  postUsers(@Body() userData): any {
    if (typeof userData.name !== 'string')
      throw new BadRequestException(
        'El campo "name" es requerido y debe ser una cadena de texto.',
      );
    if (typeof userData.lastName !== 'string')
      throw new BadRequestException(
        'El campo "lasName" es requerido y debe ser una cadena de texto.',
      );
    if (typeof userData.age !== 'number')
      throw new BadRequestException(
        'El campo "age" es requerido y debe ser un número.',
      );

    const existingUser = this.users.find(
      (user) =>
        user.name === userData.name && user.lastName === userData.lastName,
    );

    if (existingUser) {
      throw new BadRequestException(
        'Ya existe un usuario con el mismo nombre y apellido.',
      );
    }

    this.id++;
    const newUser = {
      id: this.id,
      name: userData.name,
      lastName: userData.lastName,
      age: userData.age,
    };
    this.users.push(newUser);
    return this.users;
  }

  @Get('/api/pokemon/:name')
  async getPokemonByName(@Param('name') pokemon): Promise<any> {
    const { data } = await firstValueFrom(
      await this.appService.getPokemonByName(pokemon),
    );
    return data;
  }
}
