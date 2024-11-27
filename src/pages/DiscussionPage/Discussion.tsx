import React, { useState, useEffect } from "react";
import "./Discussion.css"; // For styling

// Define types for the comment data
interface Comment {
  id: number;
  text: string;
  user: string;
}

const Discussion: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]); // Define the state type
    const [newComment, setNewComment] = useState<string>(""); // Define the state type for the new comment

    // Fetch existing comments (Mock API or Firebase integration)
    useEffect(() => {
        // Replace this with your API or Firebase call
        const mockComments: Comment[] = [
            { id: 1, text: "This is a great discussion!", user: "Alice" },
            { id: 2, text: "I learned so much from this project!", user: "Bob" },
        ];
        setComments(mockComments);
    }, []);

    // Handle new comment submission
    const handleAddComment = () => {
        if (newComment.trim()) {
            const newEntry: Comment = {
                id: comments.length + 1,
                text: newComment,
                user: "CurrentUser", // Replace with actual user info
            };
            setComments([...comments, newEntry]);
            setNewComment("");
            // Save to Firebase or your backend here
        }
    };

    return (
        <div className="discussion-container">
            <h2>Discussion Section</h2>
            <div className="comments-section">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p><strong>{comment.user}:</strong> {comment.text}</p>
                    </div>
                ))}
            </div>
            <div className="add-comment">
                <textarea
                    placeholder="Add your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Post Comment</button>
            </div>
        </div>
    );
};

export default Discussion;
