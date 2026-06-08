import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { TodoItemsService } from './todo_items.service';

@Controller('api/todolists/:todoListId/todos')
export class TodoItemsController {
    constructor(private readonly todoItemsService: TodoItemsService) { }
    
    @Get()
    index(@Param('todoListId', ParseIntPipe) listId: number) {
        return this.todoItemsService.all(listId);
    }

    @Post()
    create(@Param('todoListId', ParseIntPipe) listId: number, @Body() dto: any) {
        return this.todoItemsService.create(listId, dto);
    }

    @Put('/:itemId')
    update(
        @Param('todoListId', ParseIntPipe) listId: number,
        @Param('itemId', ParseIntPipe) itemId: number,
        @Body() dto: any
    ) {
        return this.todoItemsService.update(listId, itemId, dto);
    }

    @Delete('/:itemId')
    delete(
        @Param('todoListId', ParseIntPipe) listId: number,
        @Param('itemId', ParseIntPipe) itemId: number
    ) {
        return this.todoItemsService.delete(listId, itemId);
    }
}