import { initialData } from "@/seed/seed";
import notFound from "../not-found";
import { titleFont } from "@/config/fonts";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";




interface Props {
    params: {
        slug: string;
    }
}



export default function ({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* SlideShow */}
            <div className="col-span-1 md:col-span-2">

                {/* Mobile SlideShow */}
                <ProductMobileSlideshow
                    title={product.title}
                    images={product.images}
                    className="block md:hidden"
                />
                {/* Desktop SlideShow */}
                <ProductSlideshow
                    title={product.title}
                    images={product.images}
                    className="hidden md:block"
                />
            </div>

            {/* Detalles */}
            <div className="col-span-1 px-5">

                <h1 className={`${titleFont.className} antialised font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">{product.price}€</p>

                {/* selector tallas */}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availableSizes={product.sizes}
                />

                {/* Selector de cantidad */}
                <QuantitySelector quantity={2} />

                {/* Boton */}
                <button className="btn-primary my-5">
                    Añadir al carrito
                </button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm">
                    Descripcion
                </h3>

                <p className="font-light">
                    {product.description}
                </p>

            </div>
        </div>
    );
}