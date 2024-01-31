
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select"
import { Product } from "@/data";
import { ArrowDown, ArrowUp } from "lucide-react"

interface OrderBy {
    [key: string]: (products: Product[]) => Product[];
}

interface FilterProps {
    products: Product[];
    onOrderProducts: (orderedProducts: Product[]) => void;
}

export function Filter(props: FilterProps) {
    const { products, onOrderProducts } = props

    const orderBy: OrderBy = {
        alfabeticOrder(products: Product[]) {
            return products.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        },
        contraireAlfabeticOrder(products: Product[]) {
            return products.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        },
        smallTolarge(products: Product[]) {
            return products.sort((a, b) => {
                return Number(a.price) - Number(b.price)
            });
        },
        largeToSmall(products: Product[]) {
            return products.sort((a, b) => {
                return Number(b.price) - Number(a.price)
            });
        }

    }

    return (
        <Select onValueChange={(event) => {
            return onOrderProducts([...orderBy[event](products)])
        }}>
            <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="Filtar" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    <SelectLabel>
                        Selecione um metodo de filtragem
                    </SelectLabel>
                    <SelectItem value="largeToSmall" >
                        <p className="flex gap-2 items-center">
                            Maior valor
                            <ArrowUp strokeWidth={2} width={16} />
                        </p>
                    </SelectItem>
                    <SelectItem value="smallTolarge">
                        <p className="flex gap-2 items-center">
                            Menor valor
                            <ArrowDown strokeWidth={2} width={16} />
                        </p>
                    </SelectItem>
                    <SelectItem value="alfabeticOrder">
                        <p className="flex gap-2 items-center">
                            A-Z
                        </p>
                    </SelectItem>
                    <SelectItem value="contraireAlfabeticOrder">
                        <p className="flex gap-2 items-center">
                            Z-A
                        </p>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}