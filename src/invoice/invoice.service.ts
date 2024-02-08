import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
// invoice.service.ts
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: {
        projectId: createInvoiceDto.projectId,
        clientId: createInvoiceDto.clientId,
        adminId: createInvoiceDto.adminId,
        createdAt: createInvoiceDto.createdAt,
        updatedAt: createInvoiceDto.updatedAt,
        paiedAt: createInvoiceDto.paiedAt,
        wordRate: createInvoiceDto.wordRate,
        hourRate: createInvoiceDto.hourRate,
        
      },
    });
  }


  async getAllInvoices() {
    return await this.prisma.invoice.findMany();
  }
  async getInvoiceById(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }


// invoice.service.ts

  async searchInvoicesByClientId(clientId: number) {
    try {
      // Check if the client exists
      const client = await this.prisma.client.findUnique({
        where: {
          id: clientId,
        },
      });
      if (!client) {
        throw new NotFoundException('Client not found');
      }

      // If client exists, search for invoices
      return this.prisma.invoice.findMany({
        where: {
          clientId: clientId,
        },
      });
    } catch (error) {
      if ( error.code === 'P2025') {
        throw new NotFoundException('Client not found');
      } else {
        throw new Error('Internal server error');
      }
    }
  }



//   async updateInvoice(id: number, data: UpdateInvoiceDto) {
//     return this.prisma.invoice.update({ where: { id },  data:
// UpdateInvoiceDto });
//   }

  async deleteInvoice(id: number) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
