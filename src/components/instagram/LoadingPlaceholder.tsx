export const LoadingPlaceholder = () => (
  [...Array(3)].map((_, index) => (
    <div key={index} className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
  ))
);