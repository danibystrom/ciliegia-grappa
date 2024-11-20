export interface Recipes {
  id: number;
  url: string;
  title: string;
  description: string;
}

export const recipes: Recipes[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1580807995622-0c064f158735?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cherry on the beach",
    description:
      "A perfect end to the evening, starring cherry grappa with a touch of bitters to balance the sweetness.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1580807860497-4b4eeafb5215?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Grappa Rouge",
    description:
      "A sophisticated drink with a red twist, reflecting the deep, rich flavor of cherry grappa mixed with a hint of citrus and tonic.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1597241693839-07d7fb803af1?q=80&w=2798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cherry Collins",
    description:
      "Inspired by the &apos;Tom Collins&apos; this version uses cherry grappa instead of gin. Mix with lemon juice, simple syrup, and soda for a refreshing and tangy cocktail.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580808088959-0589895bb595?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Midnight Kiss",
    description:
      "Perfect for night owls, this drink blends cherry grappa with darker tones, adding a touch of the night&apos;s mystique.",
  },
];
