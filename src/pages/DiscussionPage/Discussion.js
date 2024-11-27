import React, { useState, useEffect } from "react";
import "./Discussion.css"; // For styling

const Discussion = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // Fetch existing comments (Mock API or Firebase integration)
    useEffect(() => {
        // Replace this with your API or Firebase call
        const mockComments = [
            { id: 1, text: "This is a great discussion!", user: "Alice" },
            { id: 2, text: "I learned so much from this project!", user: "Bob" },
        ];
        setComments(mockComments);
    }, []);

    // Handle new comment submission
    const handleAddComment = () => {
        if (newComment.trim()) {
            const newEntry = {
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
