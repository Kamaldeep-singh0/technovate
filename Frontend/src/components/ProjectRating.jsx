import { Star } from 'lucide-react';

export const ProjectRating = ({ rating }) => (
  <div className="flex items-center gap-1 bg-white p-2 rounded-full">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-600 text-gray-600'}`}
      />
    ))}
  </div>
);