export async function getHello() {
  const res = await fetch('/.netlify/functions/hello');
  if (!res.ok) {
    throw new Error('Failed to fetch hello');
  }
  return (await res.json()) as { message: string };
}
