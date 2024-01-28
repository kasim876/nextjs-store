import Grid from '@/src/components/grid';

export default function Loading() {
  return (
    <Grid className="shimmer relative overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({length: 6}, (_, idx) => (
        <Grid.Item
          className="col-span-1 rounded-lg border-primary bg-gray-200"
          key={idx}
        />
      ))}
    </Grid>
  );
}
