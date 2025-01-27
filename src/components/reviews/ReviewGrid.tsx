import { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  photoCount: number;
  reviewCount?: number;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Tyla Hodgson',
    rating: 5,
    date: '49',
    content: 'Hayden was fantastic, he effortlessly replaced my aircon unit and was professional and friendly at every touch point. Highly recommend! Thanks again Hayden.',
    photoCount: 0,
    reviewCount: 2
  },
  {
    id: '2',
    author: 'Lachy Holliday',
    rating: 5,
    date: '49',
    content: 'Hayden was quick, efficient, knowledgeable and paid great attention to detail in ensuring the best outcome for my job. I will definitely be using HD Trade Services again!',
    photoCount: 0,
    reviewCount: 1
  },
  {
    id: '3',
    author: 'Tasha Sundholm',
    rating: 5,
    date: '50',
    content: 'Hayden came around do provide a quote on an air con install. Some extra work was required, which he was upfront with and the price was probably better than reasonable. The job was completed that same day, and everyone who had spoken to him commented on how polite, respectful and well mannered he was while working.',
    photoCount: 0,
    reviewCount: 5
  },
  {
    id: '4',
    author: 'Carmel Stanford',
    rating: 5,
    date: '50',
    content: 'A big thanks to Hayden from HD Trade services. We had our gas cooktop installed and it was a very neat job and well priced. Highly recommended.',
    photoCount: 0,
    reviewCount: 7
  },
  {
    id: '5',
    author: 'Margaret Lawrence',
    rating: 5,
    date: '50',
    content: 'Hayden provided an outstanding service for my elderly mother recently when she moved into her new home. There were serious overland flow drainage issues which he has rectified with new drains that fall properly and additional sumps. He also cleaned the roof and gutters that were completely blocked with leaf litter. He was super professional and friendly, prompt and very communicative and we would highly recommend him. Thanks for the peace of mind, Hayden.',
    photoCount: 0,
    reviewCount: 1
  },
  {
    id: '6',
    author: 'Dede',
    rating: 5,
    date: '50',
    content: 'Brilliant service! Hayden has done several plumbing jobs for us including bathroom, hotwater service and roofing. Awesome work ethic thank you Hayden!',
    photoCount: 2,
    reviewCount: 8
  },
  {
    id: '7',
    author: 'charlie downey',
    rating: 5,
    date: '50',
    content: 'Friendly on time service was excellent, and quick to install',
    photoCount: 0,
    reviewCount: 1
  },
  {
    id: '8',
    author: 'Aarti Rani',
    rating: 5,
    date: '51',
    content: "I want give 5 stars to Hayden's service. He had done plumbing service in our newly built office, and he did amazing work. Highly recommended",
    photoCount: 7,
    reviewCount: 5
  },
  {
    id: '9',
    author: 'Phil Hume',
    rating: 5,
    date: '51',
    content: 'Quick and easy. Hayden was pleasant and went above and beyond to get the job done asap.',
    photoCount: 0,
    reviewCount: 2
  },
  {
    id: '10',
    author: 'Sarah Thompson',
    rating: 5,
    date: '52',
    content: 'Exceptional service from Hayden! He fixed our hot water system quickly and efficiently. Very professional and explained everything clearly.',
    photoCount: 0,
    reviewCount: 3
  },
  {
    id: '11',
    author: 'Michael Chen',
    rating: 5,
    date: '52',
    content: 'Great experience with HD Trade Services. Hayden installed our new air conditioning system with minimal disruption. Very happy with the result.',
    photoCount: 0,
    reviewCount: 4
  },
  {
    id: '12',
    author: 'Emma Wilson',
    rating: 5,
    date: '52',
    content: 'Hayden did an amazing job fixing our roof leak. Very thorough and professional. Would definitely recommend!',
    photoCount: 0,
    reviewCount: 2
  },
  {
    id: '13',
    author: 'David Miller',
    rating: 5,
    date: '53',
    content: 'Fantastic plumbing service. Hayden was prompt, professional, and solved our drainage issues completely. Very reasonable pricing too.',
    photoCount: 0,
    reviewCount: 1
  },
  {
    id: '14',
    author: 'Jessica Lee',
    rating: 5,
    date: '53',
    content: 'Had Hayden install a new gas cooktop. He was very knowledgeable and ensured everything was working perfectly before leaving. Great service!',
    photoCount: 0,
    reviewCount: 3
  },
  {
    id: '15',
    author: 'Robert Taylor',
    rating: 5,
    date: '53',
    content: 'Very impressed with the level of service. Hayden replaced our entire gutter system and did an excellent job. Highly recommend HD Trade Services.',
    photoCount: 0,
    reviewCount: 5
  }
];

export const ReviewGrid = () => {
  const [displayCount, setDisplayCount] = useState(3);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 3, reviews.length));
  };

  const handleHideReviews = () => {
    setDisplayCount(3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.slice(0, displayCount).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">{review.author}</h3>
            </div>
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 flex-grow">{review.content}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 flex items-center justify-center gap-3">
        <button
          onClick={handleLoadMore}
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] inline-flex items-center gap-2"
        >
          Load More
          <ChevronDown className="w-4 h-4" />
        </button>
        {displayCount > 3 && (
          <button
            onClick={handleHideReviews}
            className="text-gray-500 hover:text-teal-600 transition-colors"
            aria-label="Show less reviews"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}; 