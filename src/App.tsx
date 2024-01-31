import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Toggle } from "./components/ui/toggle"
import { Header } from "./components/Header"
import { useState } from "react"

import { Product, fixedProducts } from "./data"
import { Badge } from "@/components/ui/badge"
import { Filter } from "./components/Filter"

export function App() {
  const [products, setProducts] = useState(fixedProducts)

  function orderProducts(orderedProducts: Product[]) {
    return setProducts(orderedProducts)
  }

  return (
    <div className="calcHeight max-w-4xl m-auto px-4  pb-4 flex flex-col mx-auto">
      <Header onCreateNewProduct={setProducts} products={products} />
      <Filter products={products} onOrderProducts={orderProducts} />
      <div className="tableWrapper border rounded-md shadow-sm overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-1.5">
                Nome
              </TableHead>
              <TableHead className="py-1.5">
                ID
              </TableHead>
              <TableHead className="py-1.5">
                <Toggle className="w-full flex">Preço</Toggle>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(product => {
              const { id, name, price } = product
              const productValue = parseFloat(String(price))
              return (
                <TableRow className="tableRowHover" key={id}>
                  <TableCell className="w-full">{name}</TableCell>
                  <TableCell className="w-full" >{id}</TableCell>
                  <TableCell className="w-full">
                    <Badge variant={"outline"} className={productValue > 300 ? "border-red-500 w-full" : "border-green-500 w-full"}>
                      {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

