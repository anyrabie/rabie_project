import React, { useState } from 'react';
import { Button } from './ui/button.jsx';
import './Comment.css';

export function Comments() {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [comments, setComments] = useState([]);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim() === '') {
      setError('Please enter a comment.');
      return;
    }

    setIsLoading(true);

    try {
      
      await submitCommentToBackend(comment);
      setComments([...comments, comment]); 
      setComment('');
      setError('');
      alert('Comment submitted successfully!');
    } catch (error) {
      setError('Error submitting comment. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="grid w-full gap-2">
      <textarea
        value={comment}
        onChange={handleChange}
        placeholder="Type your message here."
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send message'}
      </Button>

      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Submitted Comments:</h3>
          {comments.map((c, index) => (
            <div key={index} className="comment-item">
              <p>{c}</p>
              <div className="comment-options">
                <button onClick={() => handleDelete(index)}>Delete</button>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

async function submitCommentToBackend(comment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating success or failure randomly
      if (Math.random() < 0.8) {
        resolve();
      } else {
        reject(new Error('Backend error'));
      }
    }, 1000);
  });
}
