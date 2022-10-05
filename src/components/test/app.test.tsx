import React from 'react'
import { describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddProduct } from '../form/addProduct'


describe('should form render', () => {
    it('', () => {
        render(<AddProduct/>)
    })

    it('should text Add at button', () => {
        screen.getByText('Add')
    })

    it('should render an input', () => {
        screen.getAllByRole('textbox')
    })

    it ('should event input', () => {
        const inputV = screen.getByLabelText('Name Product')
        fireEvent.change(inputV, {target: {value: 'Apple'}})

        screen.debug()
    })

    it('should the event at button', () => {
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
    })

})