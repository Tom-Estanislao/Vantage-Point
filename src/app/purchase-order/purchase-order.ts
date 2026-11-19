import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

// Interface for a single order line in the PO
interface PurchaseOrderLine {
  stockItemId: number;
  stockItemName: string;
  unitPrice: number;
  suggestedQuantity: number;
  quantity: number;
}

// Interface for the draft of the purchase order
interface PurchaseOrderDraft {
  supplierName: string;
  deliveryAddress: string;
  deliveryMethod: string | null;
  primaryContactName: string;
  lines: PurchaseOrderLine[];
}

@Component({
  imports: [],
  selector: 'app-purchase-order',
  styleUrl: './purchase-order.css',
  templateUrl: './purchase-order.html',
})
export class PurchaseOrder {
  screen = 3;
  poNumber = 2075;
  orderDate = '2026-11-18';

  order(): PurchaseOrderDraft {
    return {
      supplierName: 'Fabrikam, Inc.',
      deliveryAddress: '1 Fabrikam Way, Lakeview Heights, KY 40216',
      deliveryMethod: 'Road Freight',
      primaryContactName: 'Bill Lawson',
      lines: [
        {
          stockItemId: 136, stockItemName: 'Superhero action jacket (Blue) XL',
          unitPrice: 30.0, suggestedQuantity: 34, quantity: 40
        },
        {
          stockItemId: 160, stockItemName: 'Ogre hoodie (Black) S',
          unitPrice: 30.0, suggestedQuantity: 40, quantity: 40
        }
      ]
    }
  }

  lineTotal(line: PurchaseOrderLine): number {
    return line.quantity * line.unitPrice;
  }

  orderTotal(): number {
    return this.order().lines.reduce((sum, line) => sum + this.lineTotal(line), 0);
  }
}
