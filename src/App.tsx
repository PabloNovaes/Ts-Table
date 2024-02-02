import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { ThemeProvider } from "@/components/theme-provider"

import { useState } from "react"
import { Header } from "./components/Header"
import { Toggle } from "./components/ui/toggle"

import { Badge } from "@/components/ui/badge"
import { Filter } from "./components/Filter"
import { SwitchTheme } from "./components/SwitchTheme"
import { Product, fixedProducts } from "./data"

export function App() {
  const [products, setProducts] = useState(fixedProducts)

  function orderProducts(orderedProducts: Product[]) {
    return setProducts(orderedProducts)
  }

  return (
    <ThemeProvider>
      <header className="h-[60px] border-b flex items-center px-4 justify-between">

        <SwitchTheme />
        <h1 className="text-secondary-foreground text-2xl font-extrabold">
          <span className="text-blue-600">Ts</span>Table
        </h1>

        <div className="flex gap-5">
          <Avatar className="">
            <AvatarImage src="https://github.com/pablonovaes.png" alt="@shadcn" />
            <AvatarFallback className="bg-zinc-700">PN</AvatarFallback>
          </Avatar>
        </div>

      </header>
      <div className="calcHeight max-w-4xl m-auto px-4 pb-4 flex flex-col mx-auto">
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
            <TableBody className="text-secondary-foreground">
              {products.length > 0 && products.map(product => {
                const { id, name, price } = product
                const productValue = parseFloat(String(price))
                return (
                  <TableRow className="tableRowHover" key={id}>
                    <TableCell className="w-full">{name}</TableCell>
                    <TableCell className="w-full">{id}</TableCell>
                    <TableCell className="w-full text-red">
                      <Badge variant={"outline"} className={productValue > 300 ? "border-red-500 w-full " : "border-green-500 w-full"}>
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
        {products.length == 0 && <h1 className="mx-auto mt-2 text-muted-foreground">Nenhum registro encontrado</h1>}
      </div>
    </ThemeProvider>
  )
}

