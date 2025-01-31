import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function CollectionItem({
  item,
  priority
}: {
  item: Product;
  priority?: boolean;
}) {
  return (
    <div className="col-span-1">
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          priority={priority}
          alt={item.title}
          label={{
            position: 'bottom',
            title: item.title as string,
            amount: item.priceRange.minVariantPrice.amount,
            currencyCode: item.priceRange.minVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function CollectionSection() {
  const products = await getCollectionProducts({
    collection: 'woman'
  });

  console.log({products})

  if (!products.length) return null;

  const [first, second, third, fourth] = products;

  console.log(products)

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12">
      <h2 className="mb-8 text-2xl font-bold">Featured Collection</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <CollectionItem key={product.id} item={product} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}