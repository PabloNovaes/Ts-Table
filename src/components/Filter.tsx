
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


export function Filter(props) {

    const sortMethods = {
        letterAtoZ(products: Product[]) {
            return products.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        },
        letterZtoA(products: Product[]) {
            return products.sort((a, b) => {
                return a.name.localeCompare(b.name);
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
        <Select>
            <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="Filtar" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        Selecione um metodo de filtragem
                    </SelectLabel>
                    <SelectItem value="Maior valor">
                        <p className="flex gap-2 items-center">
                            Maior valor
                            <ArrowUp strokeWidth={2} width={16} />
                        </p>
                    </SelectItem>
                    <SelectItem value="Menor valor">
                        <p className="flex gap-2 items-center">
                            Menor valor
                            <ArrowDown strokeWidth={2} width={16} />
                        </p>
                    </SelectItem>
                    <SelectItem value="De A a Z">
                        <p className="flex gap-2 items-center">
                            A-Z
                        </p>
                    </SelectItem>
                    <SelectItem value="De Z a A">
                        <p className="flex gap-2 items-center">
                            Z-A
                        </p>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}