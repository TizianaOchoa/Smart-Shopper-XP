export interface BudgetableItem {
  price: number
  quantity: number
}

export function calculateListTotal(items: BudgetableItem[]): number {
  if (!items || items.length === 0) return 0
  return items.reduce((acc, item) => {
    const price = Number(item.price) || 0
    const quantity = Number(item.quantity) || 0
    return acc + price * quantity
  }, 0)
}

export function isBudgetExceeded(total: number, budget?: number | null): boolean {
  if (!budget || budget <= 0) return false
  return total > budget
}
