import { PlusCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

import { Product } from "@/data"
import moment from 'moment-timezone'
import { FormEvent, useState } from "react"
import { Toaster, toast } from "sonner"

moment.tz.setDefault("America/Sao_Paulo")


interface HeaderProps {
    onCreateNewProduct: (products: Product[]) => void,
    products: Product[];
}

export function Header({ onCreateNewProduct, products }: HeaderProps) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        id: "",
        price: ""
    })

    function createNewProduct(event: FormEvent) {
        event.preventDefault()
        const { price } = newProduct

        const now = new Date()
        onCreateNewProduct([{ ...newProduct, price: parseFloat(price) }, ...products])

        setNewProduct({
            name: "",
            price: "",
            id: ""
        })

        return toast("Novo produto adicionado!", {
            description: moment(now).format("D [de] MMMM [às] HH[h]mm"),
            action: {
                label: "Fechar",
                onClick: () => { return }
            }

        })

    }

    return (
        <>
            <form onSubmit={(event) => createNewProduct(event)}>
                <div className="flex gap-2 w-full h-6 pt-4 mb-12 ">
                    <Input required
                        placeholder="Product name"
                        value={newProduct.name}
                        onChange={(event) => setNewProduct(() => {
                            const textName = event.target.value
                            return {
                                ...newProduct,
                                name: textName.replace(/\b\w/g, match => match.toUpperCase())
                            }
                        })} />
                    <Input required
                        placeholder="Product price"
                        value={newProduct.price}
                        onChange={(event) => setNewProduct(() => {
                            return {
                                ...newProduct,
                                id: `${newProduct.name.slice(0, 4).toUpperCase()}0${products.length}`,
                                price: event.target.value
                            }
                        })} />
                    <Button className="gap-2">
                        <PlusCircle />
                        Add
                    </Button>
                </div>
            </form >
            <Toaster />
        </>
    )
}