import { useState } from 'react'
import './ExpenseForm.css'

const CATEGORIES = ['Food', 'Travel', 'Bills', 'Other']

// Collects an expense and passes valid values to the parent's onAdd callback.
function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const trimmedTitle = title.trim()
    const numericAmount = Number(amount)

    if (!trimmedTitle) {
      setError('Enter an expense title.')
      return
    }

    if (!amount.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Enter an amount greater than 0.')
      return
    }

    if (numericAmount > 100000) {
      setError('Amount cannot be greater than 100000.')
      return
    }

    if (!CATEGORIES.includes(category)) {
      setError('Select a category.')
      return
    }

    onAdd({
      title: trimmedTitle,
      amount: numericAmount,
      category,
    })
    setTitle('')
    setAmount('')
    setCategory('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <div className="expense-form__field">
        <label htmlFor="expense-title">Title</label>
        <input
          id="expense-title"
          name="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-required="true"
          aria-describedby={error ? 'expense-form-error' : undefined}
        />
      </div>

      <div className="expense-form__field">
        <label htmlFor="expense-amount">Amount</label>
        <input
          id="expense-amount"
          name="amount"
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          aria-required="true"
          aria-describedby={error ? 'expense-form-error' : undefined}
        />
      </div>

      <div className="expense-form__field">
        <label htmlFor="expense-category">Category</label>
        <select
          id="expense-category"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-required="true"
          aria-describedby={error ? 'expense-form-error' : undefined}
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="expense-form__error" id="expense-form-error" role="alert">
          {error}
        </p>
      )}

      <button className="expense-form__submit" type="submit">
        Add expense
      </button>
    </form>
  )
}

export default ExpenseForm
