import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get("/example")
  @Render('example')
  example() {
    return {};
  }

  @Get("/product")
  @Render('product')
  example() {
    return{};
}