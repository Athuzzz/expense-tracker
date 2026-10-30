/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ExpenseForm from '../components/ExpenseForm.jsx'

afterEach(cleanup)

function fillValidExpense() {
  fireEvent.change(screen.getByLabelText('Title'), {
    target: { value: '  Lunch  ' },
  })
  fireEvent.change(screen.getByLabelText('Amount'), {
    target: { value: '250.50' },
  })
  fireEvent.change(screen.getByLabelText('Category'), {
    target: { value: 'Food' },
  })
}

describe('ExpenseForm', () => {
  it('submits a trimmed title and numeric amount, then clears the form', () => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)

    fillValidExpense()
    fireEvent.click(screen.getByRole('button', { name: 'Add expense' }))

    expect(onAdd).toHaveBeenCalledOnce()
    expect(onAdd).toHaveBeenCalledWith({
      title: 'Lunch',
      amount: 250.5,
      category: 'Food',
    })
    expect(screen.getByLabelText('Title').value).toBe('')
    expect(screen.getByLabelText('Amount').value).toBe('')
    expect(screen.getByLabelText('Category').value).toBe('')
  })

  it.each([
    ['an empty title', '', '250'],
    ['a whitespace-only title', '   ', '250'],
    ['a non-numeric amount', 'Taxi', 'abc'],
    ['a zero amount', 'Taxi', '0'],
    ['a negative amount', 'Taxi', '-1'],
    ['an amount above the limit', 'Laptop', '100001'],
  ])('does not submit %s and displays an error', (_description, title, amount) => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: title } })
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: amount },
    })
    fireEvent.change(screen.getByLabelText('Category'), {
      target: { value: 'Other' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add expense' }))

    expect(onAdd).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toBeTruthy()
  })

  it('does not submit when no category is selected', () => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)

    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'Taxi' },
    })
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: '25' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add expense' }))

    expect(onAdd).not.toHaveBeenCalled()
    expect(screen.getByRole('alert').textContent).toBe('Select a category.')
  })
})
