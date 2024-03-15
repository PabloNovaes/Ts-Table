export interface Product {
    name: string,
    id: string,
    price: number | string
}

export const fixedProducts: Product[] = [
    { name: 'Geladeira', price: 2499.99, id: 'GELA00' },
    { name: 'Celular', price: 1799.99, id: 'CELU01' },
    { name: 'Sofá', price: 1299.99, id: 'SOFA02' },
    { name: 'Ventilador', price: 99.99, id: 'VENT03' },
    { name: 'Liquidificador', price: 159.99, id: 'LIQU04' },
    { name: 'Cadeira', price: 299.99, id: 'CADE05' },
    { name: 'Fone de Ouvido', price: 149.99, id: 'FONE06' },
    { name: 'Notebook', price: 3199.99, id: 'NOTE07' },
    { name: 'TV', price: 1999.99, id: 'TV00' },
    { name: 'Câmera', price: 699.99, id: 'CAME01' },
    { name: 'Cama', price: 899.99, id: 'CAMA02' },
    { name: 'Mesa', price: 399.99, id: 'MESA03' },
    { name: 'Tapete', price: 89.99, id: 'TAPE04' },
    { name: 'Tablet', price: 599.99, id: 'TABL05' },
    { name: 'Ferro de Passar', price: 79.99, id: 'FERR06' }
]




