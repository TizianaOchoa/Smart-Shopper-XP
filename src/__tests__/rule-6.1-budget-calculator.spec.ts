import { describe, it, expect } from 'vitest'
import { calculateListTotal, isBudgetExceeded } from '../utils/budget'

describe('Regla 6.1 - Cálculo de Presupuesto y Totales', () => {
  const itemsMOCK = [
    { id: '1', name: 'Leche', price: 1200, quantity: 2, completed: false }, // 2400
    { id: '2', name: 'Pan', price: 1500, quantity: 1, completed: true }, // 1500
  ]

  it('debe calcular correctamente el total acumulado de la lista de compras', () => {
    const total = calculateListTotal(itemsMOCK)
    expect(total).toBe(3900)
  })

  it('debe indicar false si el total acumulado NO supera el presupuesto', () => {
    const total = calculateListTotal(itemsMOCK)
    const budget = 5000
    expect(isBudgetExceeded(total, budget)).toBe(false)
  })

  it('debe indicar true (alerta) si el total acumulado supera el presupuesto', () => {
    const total = calculateListTotal(itemsMOCK)
    const budget = 3000
    expect(isBudgetExceeded(total, budget)).toBe(true)
  })
})
