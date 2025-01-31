'use client'

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useState } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );

  const price = selectedVariant
    ? {
        amount: selectedVariant.price.amount,
        currencyCode: selectedVariant.price.currencyCode
      }
    : {
        amount: product.priceRange.maxVariantPrice.amount,
        currencyCode: product.priceRange.maxVariantPrice.currencyCode
      };

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={price.amount} currencyCode={price.currencyCode} />
        </div>
        {selectedVariant && !selectedVariant.availableForSale && (
          <p className="mt-2 text-red-500">This variant is currently out of stock</p>
        )}
      </div>
      <VariantSelector 
        options={product.options} 
        variants={product.variants}
        onVariantChange={setSelectedVariant}
      />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
