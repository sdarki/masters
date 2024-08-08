import React from 'react';
import styles from './feedback.module.css'; // Create this file for custom CSS

const feedbackData = [
  {
    id: 1,
    name: 'Shirish Mehera',
    avatar: '/images/profile.jpg',
    feedback: 'The service was exceptional and the staff was very friendly. I highly recommend this place to anyone looking for quality and reliability.',
    rating: 5,
    bgColor: 'bg-primary'
  },
  {
    id: 2,
    name: 'Pankaj Jha',
    avatar: '/images/profile.jpg',
    feedback: 'I had a wonderful experience. The team was professional and efficient, making the entire process smooth and stress-free.',
    rating: 5,
    bgColor: 'bg-danger'
  },  {
    id: 3,
    name: 'Neha Kapoor',
    avatar: '/images/profile.jpg',
    feedback: 'Fantastic service! The staff went above and beyond to ensure all my needs were met. I will definitely be returning in the future.',
    rating: 5,
    bgColor: 'bg-primary'
  },
  {
    id: 4,
    name: 'Tamana Bhat',
    avatar: '/images/profile.jpg',
    feedback: 'The quality of the product exceeded my expectations. The customer service was also top-notch, providing prompt and helpful responses.',
    rating: 5,
    bgColor: 'bg-danger'
  }
];

const CustomerFeedback = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-2">COMMENTS</h2>
      <h3 className="text-center mb-4">Clients Says</h3>
      <div className="row">
        {feedbackData.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className={ `p-3 ${styles.feedbackcard}`}>
              <div className="d-flex align-items-center mb-2">
                <div className={`${styles.ratingstar} ${item.bgColor} text-white p-1 rounded`}>
                  <span>{'★'.repeat(item.rating)}</span>
                </div>
              </div>
              <p>{item.feedback}</p>
              <div className="d-flex align-items-center">
                <img src={item.avatar} alt="avatar" className="rounded-circle mr-2" />
                <span>{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
