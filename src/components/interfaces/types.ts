// CONTRATO DE LO QUE RECIBE EL CONTEXT
export interface ContextInterface {
    namePro: string,
    price: string,
    newProduct: CreateProduct[]
    setNewProduct: React.Dispatch<React.SetStateAction<CreateProduct[]>>
    handleChangePro: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleChangePrice: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleDelete: (id: number | undefined) => void
    render: boolean
    handleRender: () => void
    onlyProd: (CreateProduct | undefined)
    handleUpdate: (id: number | undefined) => void
    upChangePrice: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    upChangePro: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    findProduct: (id: number | undefined) => void
    valueUpPrice: string | undefined
    valueUpProduct: string | undefined
    searchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    filterProducts: CreateProduct[]
}

// CONTRATO DEL ESTADO Y LA API
export interface CreateProduct {
    id?: number
    name?: string
    price?: number
}