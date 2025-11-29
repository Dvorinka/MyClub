import { ProductsGrid } from "@/components/products-grid";

export default function ProduktyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Produkty</h1>
        <p className="mt-3 text-muted-foreground">
          Samostatné nástroje k MyClubu – pro streamy, obrazovky i komunitu.
        </p>
      </div>

      <div className="mt-10">
        <ProductsGrid />
      </div>
    </div>
  );
}
