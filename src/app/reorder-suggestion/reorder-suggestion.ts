import { Component } from '@angular/core';

interface ReorderSuggestItemDTO {
  id: number,
  name: string,
  supplier: string,
  inStock: number,
  reorderLevel: number,
  targetLevel: number,
  onOrder: number,
  suggestedQuantity: number,
  estimatedCost: number
}

@Component({
  imports: [],
  selector: 'app-reorder-suggestion',
  styleUrl: './reorder-suggestion.css',
  templateUrl: './reorder-suggestion.html',
})
export class ReorderSuggestion {
  reorderList(): ReorderSuggestItemDTO[] {
    return [
      { id: 1, name: "USB missile launcher (Green)", supplier: "Contoso, Ltd.", inStock: 1000, reorderLevel: 1500, targetLevel: 2000, onOrder: 0, suggestedQuantity: 1000, estimatedCost: 1000 },
      { id: 2, name: "USB missile launcher (Blue)", supplier: "Contoso, Ltd.", inStock: 150, reorderLevel: 180, targetLevel: 200, onOrder: 50, suggestedQuantity: 0, estimatedCost: 0 }
    ]
  }
}
