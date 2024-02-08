import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
// invoice.controller.ts
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Invoice } from './entities/invoice.entity';

@Controller('invoices')
@ApiTags('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  //create a new invoice
  @Post('add')
  @ApiOperation({ summary: 'Create a new invoice' })
  @ApiBody({ type: CreateInvoiceDto })
  @ApiResponse({ status: 201, description: 'The invoice has been successfully created' })
  async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }

 

  //get All invoices
  @Get("all")
  // @ApiOperation({ summary: 'Get all invoices', description: 'Retrieve a list of all invoices' })
  // @ApiResponse({ status: 200, description: 'Return a list of invoices', type: Invoice })
  async getAllInvoices() {
    return this.invoiceService.getAllInvoices();
  }


   //get by iD
   @Get('/:id')
   // @ApiOperation({ summary: 'Get an invoice by ID' })
   // @ApiParam({ name: 'id', description: 'The ID of the invoice' })
   // @ApiResponse({ status: 200, description: 'Return the invoice with the specified ID' })
   async getInvoiceById(@Param('id') id: string) {
     return this.invoiceService.getInvoiceById(+id);
   }
   //best practice in routing : otherwise code will mess up ur head 
  //search by client
  @Get('search_client/:clientId')
  @ApiOperation({ summary: 'Search invoices by client ID', description: 'Find invoices by client ID' })
  @ApiResponse({ status: 200, description: 'Return invoices for the specified client ID', type: Invoice })
  @ApiResponse({ status: 404, description: 'Client not found' })
  // @ApiQuery({ name: 'clientId', description: 'ID of the client', required: true, type: Number })
  async searchInvoicesByClientId(@Param('clientId') clientId: number) {
    return this.invoiceService.searchInvoicesByClientId(+clientId);
  }

  //Update invoice
  // @Patch(':id')
  // @ApiOperation({ summary: 'Update an invoice' })
  // @ApiParam({ name: 'id', description: 'The ID of the invoice' })
  // @ApiBody({ type: UpdateInvoiceDto })
  // @ApiResponse({ status: 200, description: 'The invoice has been successfully updated' })
  // async updateInvoice(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
  //   return this.invoiceService.updateInvoice(+id, updateInvoiceDto);
  // }

  //Delete invoice
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an invoice' })
  @ApiParam({ name: 'id', description: 'The ID of the invoice' })
  @ApiResponse({ status: 204, description: 'The invoice has been successfully deleted' })
  async deleteInvoice(@Param('id') id: string) {
    return this.invoiceService.deleteInvoice(+id);
  }
}
