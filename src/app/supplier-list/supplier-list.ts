import { Component } from '@angular/core';

/**
 * one stock item that the supplier sells
 */
interface SupplierStockItem {
  stockItemId: number;
  stockItemName: string;
  unitPrice: number;
  quantityOnHand: number; //current amount of items in warehouse
  reorderLevel: number; //when to reorder based on level quantity
}

interface Supplier {
  supplierId: number;
  supplierName: string;
  categoryName: string;
  deliveryAddressLine1: string;
  deliveryCity: string;
  deliveryStateProvince: string;
  deliveryPostalCode: string;
  deliveryMethod: string | null; //nullable
  primaryContactName: string;
  phoneNumber: string;
  faxNumber: string;
  websiteUrl: string;
  stockItems: SupplierStockItem[]; //list of the interface SupplierStockItem
}

/**
 * This is mock WWI data that mocks how every supplier is shown on the interface
 */
@Component({
  imports: [],
  selector: 'app-supplier-list',
  styleUrl: './supplier-list.css',
  templateUrl: './supplier-list.html',
})
export class SupplierList {
  suppliers(): Supplier[] {
    return [
      /**
       * has low stock items
       */
      {
        supplierId: 4,
        supplierName: 'Fabrikam, Inc.',
        categoryName: 'Clothing Supplier',
        deliveryAddressLine1: '1 Fabrikam Way',
        deliveryCity: 'Lakeview Heights',
        deliveryStateProvince: 'KY',
        deliveryPostalCode: '40216',
        deliveryMethod: 'Road Freight',
        primaryContactName: 'Bill Lawson',
        phoneNumber: '(203) 555-0104',
        faxNumber: '(203) 555-0108',
        websiteUrl: 'http://www.fabrikam.com',
        stockItems: [
          {
            stockItemId: 136,
            stockItemName: 'Superhero action jacket (Blue) XL',
            unitPrice: 30.0,
            quantityOnHand: 26,
            reorderLevel: 30,
          },
          {
            stockItemId: 89,
            stockItemName: '"The Gu" red shirt XML tag t-shirt (Black) M',
            unitPrice: 18.0,
            quantityOnHand: 650,
            reorderLevel: 50,
          },
          {
            stockItemId: 160,
            stockItemName: 'Ogre hoodie (Black) S',
            unitPrice: 30.0,
            quantityOnHand: 40,
            reorderLevel: 40,
          },
        ],
      },
      /**
       * has stock items, none low
       */
      {
        supplierId: 1,
        supplierName: 'A Datum Corporation',
        categoryName: 'Novelty Goods Supplier',
        deliveryAddressLine1: '183838 Southwest Boulevard',
        deliveryCity: 'Zionsville',
        deliveryStateProvince: 'IN',
        deliveryPostalCode: '46077',
        deliveryMethod: 'Road Freight',
        primaryContactName: 'Reio Kabin',
        phoneNumber: '(847) 555-0100',
        faxNumber: '(847) 555-0101',
        websiteUrl: 'http://www.adatum.com',
        stockItems: [
          {
            stockItemId: 4,
            stockItemName: 'DBA joke mug - mind if I join you? (White)',
            unitPrice: 13.0,
            quantityOnHand: 410,
            reorderLevel: 20,
          },
          {
            stockItemId: 3,
            stockItemName: 'Office cube periscope (Black)',
            unitPrice: 18.5,
            quantityOnHand: 300,
            reorderLevel: 10,
          },
        ],
      },
      /**
       * has low stock items
       */
      {
        supplierId: 2,
        supplierName: 'Contoso, Ltd.',
        categoryName: 'Novelty Goods Supplier',
        deliveryAddressLine1: '2934 Alicia Avenue',
        deliveryCity: 'Redmond',
        deliveryStateProvince: 'WA',
        deliveryPostalCode: '98052',
        deliveryMethod: 'Refrigerated Air Freight',
        primaryContactName: 'Hanna Mihhailov',
        phoneNumber: '(360) 555-0100',
        faxNumber: '(360) 555-0101',
        websiteUrl: 'http://www.contoso.com',
        stockItems: [
          {
            stockItemId: 1,
            stockItemName: 'USB missile launcher (Green)',
            unitPrice: 25.0,
            quantityOnHand: 1000,
            reorderLevel: 1500,
          },
          {
            stockItemId: 2,
            stockItemName: 'USB missile launcher (Blue)',
            unitPrice: 25.0,
            quantityOnHand: 150,
            reorderLevel: 180,
          },
        ],
      },
      /**
       * no stock items and no delivery method
       */
      {
        supplierId: 3,
        supplierName: 'Consolidated Messenger',
        categoryName: 'Courier Services Supplier',
        deliveryAddressLine1: '209 Lingonberry Road',
        deliveryCity: 'Sacramento',
        deliveryStateProvince: 'CA',
        deliveryPostalCode: '94203',
        deliveryMethod: null,
        primaryContactName: 'Kerstin Parn',
        phoneNumber: '(209) 555-0100',
        faxNumber: '(209) 555-0101',
        websiteUrl: 'http://www.consolidatedmessenger.com',
        stockItems: [],
      },
    ];
  }
}
