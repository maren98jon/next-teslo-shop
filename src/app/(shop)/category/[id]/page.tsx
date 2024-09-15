import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const products = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}

export default function ({ params }: Props) {

    const { id } = params;
    const categoryProducts = products.filter(product => product.gender === id)

    const labels: Record<Category, string> = {
        'men': 'para Hombres',
        'women': 'para Mujeres',
        'kid': 'para Niñ@s',
        'unisex': 'para todos'
    }

    // if (id === 'kids') {
    //     notFound();
    // }

    return (
        <>
            <Title
                title={`Articulos ${(labels as any)[id]}`}
                subtitle="Todos los productos"
                className="mb-2"
            />

            <ProductGrid
                products={categoryProducts}
            />
        </>
    );
}