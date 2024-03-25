'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const sampleComments = [
  { id: 1, username: 'User1', content: 'To anybody reading this, I pray that whatever is hurting you or whatever you are constantly stressing about gets better. May the dark thoughts, the overthinking, and the doubt exit your mind may clarity replace confusion. may peace and calmness fill your life.', 
  replies: [
    { id: 3, username: 'User2', content: 'To the beautiful soul reading this, if you are going through a hard time, know that it is only temporary. You will overcome it and manifest all that you desire. ❤🧡💛💚💙💜', liked: false },
    { id: 5, username: 'User3', content: 'This sound is so wonderful. The person who is reading this comment , i wish you great success , health, love and happiness', liked: false }
  ], avatar: '/path/to/user1.jpg', liked: false },
  { id: 2, username: 'User2', content: 'Thank you God for youre Stunning Natural Beauty of Nature For all of us to admire', 
  replies: [
    { id: 7, username: 'User2', content: 'Amazon is so beautiful, I also want to have a trip to Amazon in the future to experience', liked: false },
    { id: 9, username: 'User3', content: 'I like this song and Place look so Beautiful Relaxing Soul and mind Thank you for you show view your YouTube .', liked: false }
  ], avatar: '/path/to/user2.jpg', liked: false },
  // Add more sample comments as needed
];

type ExpandedComments = Record<number, boolean>;

export default function Comment() {
  const [expandedCommentId, setExpandedCommentId] = React.useState<ExpandedComments>({});
  const [newComment, setNewComment] = React.useState('');
  const [comments, setComments] = React.useState(sampleComments);
  const [replyText, setReplyText] = React.useState<string>('');
  const [selectedCommentId, setSelectedCommentId] = React.useState<number | null>(null);

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(event.target.value);
  };

  const handlePublishReply = (commentId: number) => {
    console.log('Publishing reply:', replyText, 'to comment id:', commentId);
    setReplyText('');
    setSelectedCommentId(null);
  };

  const handleExpandClick = (commentId:number) => {
    setExpandedCommentId((prevExpanded) => ({
      ...prevExpanded,
      [commentId]: !prevExpanded[commentId]
    }));
  };

  const handleCommentChange = (event: any) => {
    setNewComment(event.target.value);
  };

  const handlePublish = () => {
    // Add logic to publish new comment
    console.log('Publishing comment:', newComment);
    setNewComment(''); // Clear comment field after publishing
  };

  const handleCancel = () => {
    // Clear comment field
    setNewComment('');
  };

  const handleLike = (commentId: any) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, liked: !comment.liked };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div>
      <div style={{ width: '100%', borderRadius: 0, border: 'none' }}>
        <div>
          <TextField
            label="Add a public comment..."
            fullWidth
            multiline
            value={newComment}
            onChange={handleCommentChange}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <IconButton onClick={handlePublish}>
              <SendIcon />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
      {comments.map(comment => (
        <div key={comment.id} style={{ width: '100%', borderRadius: 0, border: 'none'}}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Avatar src={comment.avatar} sx={{ width: 35, height: 35 }}/>
            <div style={{ marginLeft: '1rem', width: '100%', marginBottom:'1rem' }}>
              <Typography variant="body1" gutterBottom>{comment.username}</Typography>
              <Typography variant="body2" sx={{fontSize:'1rem', fontWeight:'medium'}}>{comment.content}</Typography>
              <Stack direction="row" spacing={2}>
                <IconButton onClick={() => handleExpandClick(comment.id)}>
                  <ReplyIcon />
                </IconButton>
                <IconButton onClick={() => handleLike(comment.id)}>
                  {comment.liked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                </IconButton>
                <Button onClick={() => setSelectedCommentId(comment.id)}>Reply</Button>
              </Stack>
              {selectedCommentId  === comment.id && (
                <div style={{ marginTop: '1rem' }}>
                  <TextField
                    fullWidth
                    multiline
                    placeholder="Write a reply..."
                    value={replyText}
                    onChange={handleReplyChange}
                  />
                  <Stack direction="row" alignItems="center" spacing={2} style={{ marginTop: '1rem' }}>
                    <Button onClick={() => handlePublishReply(comment.id)}>Publish</Button>
                    <Button onClick={() => setSelectedCommentId(null)}>Cancel</Button>
                  </Stack>
                </div>
              )}
            </div>
          </div>
          <Collapse in={expandedCommentId[comment.id]} timeout="auto" unmountOnExit>
            <div style={{ paddingLeft: '2.5rem', marginTop:'0rem' }}>
              {comment.replies.map((reply, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Avatar src={comment.avatar} sx={{ width: 25, height: 25, marginRight: '0.5rem' }} />
                    <div style={{ width: '100%' }}>
                      <Typography variant="body1" gutterBottom>{reply.username}</Typography>
                      <Typography variant="body2" style={{ fontSize:'0.99rem', fontWeight:'medium'}}>{reply.content}</Typography>
                      <Stack direction="row" spacing={2}>
                        <IconButton onClick={() => handleLike(reply.id)}>
                          {reply.liked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                        </IconButton>
                        <Button onClick={() => setSelectedCommentId(reply.id)}>Reply</Button>
                      </Stack>
                      {selectedCommentId  === reply.id && (
                        <div style={{ marginTop: '1rem' }}>
                          <TextField
                            fullWidth
                            multiline
                            placeholder="Write a reply..."
                            value={replyText}
                            onChange={handleReplyChange}
                          />
                          <Stack direction="row" alignItems="center" spacing={2} style={{ marginTop: '1rem' }}>
                            <Button onClick={() => handlePublishReply(reply.id)}>Publish</Button>
                            <Button onClick={() => setSelectedCommentId(null)}>Cancel</Button>
                          </Stack>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>


        </div>
      ))}
    </div>
  );
}
